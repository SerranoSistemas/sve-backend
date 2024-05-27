import { NextFunction, Request, Response } from "express";
import { Pagination } from "../Data/Types";

export const Middleware = (REQ: Request, RES: Response, NEXT: NextFunction) => {
  if (REQ.query.status) {
    //@ts-ignore
    RES.status(parseInt(REQ.query.status, 200));
  }

  if (REQ.query.delay) {
    //@ts-ignore
    const delayInMs = parseInt(REQ.query.delay, 10);
    if (!isNaN(delayInMs)) {
      setTimeout(() => {
        NEXT();
      }, delayInMs);
      return;
    }
  }
  NEXT();
};

export const DefaultPagination: Pagination = {
  page: 1,
  rows: 10,
};

export const PaginateAndSort = (data: any[], pagination = DefaultPagination) => {
  const { page, rows, orderBy, orderDirection } = pagination;

  if (!data.length) {
    return {
      data: [],
      totalRows: 0,
      currentPage: page,
      totalPages: 0,
    };
  }

  let sortedData = [...data];

  if (orderBy) {
    sortedData.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return orderDirection === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return orderDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Calcule o índice inicial e final para a paginação
  const startIndex = (page - 1) * rows;
  const endIndex = startIndex + rows;

  // Verifica se o índice inicial está fora do intervalo
  if (startIndex >= sortedData.length) {
    return {
      data: [],
      totalRows: sortedData.length,
      currentPage: page,
      totalPages: Math.ceil(sortedData.length / rows),
    };
  }

  // Calcule o total de páginas
  const totalPages = Math.ceil(sortedData.length / rows);

  // Retorne os dados paginados e as informações adicionais
  return {
    paginatedData: sortedData.slice(startIndex, Math.min(endIndex, sortedData.length)),
    totalRows: sortedData.length,
    currentPage: page,
    totalPages: totalPages,
  };
};

export const GetElementByID = (data: any[], Id: string | number) => {
  return data.find((Element) => Element.identificador === Id);
};
