import { NextFunction, Request, Response } from "express";
import { Pagination } from "../Data/Types";
import { Plantas } from "../Data/Planta";
import { DefaultPagination } from "../Data/Pagination";

export const Copy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

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
    paginatedData: sortedData.slice(startIndex, Math.min(endIndex, sortedData.length)) || [],
    totalRows: sortedData.length,
    currentPage: page,
    totalPages: totalPages,
    rowsPerPage: rows,
  };
};

export const GetElementByID = (data: any[], Id: string | number) => {
  return data.find((Element) => Element.identificador === Id);
};

export const Filter = (data: any[], text: string | null, type: string) => {
  if (!text) return data;

  var NewData = Copy(data);

  if (type === "Plantas") {
    NewData = data.filter((Item) => {
      const codigo = Item.codigo.includes(text);
      const descricao = Item.descricao.toLowerCase().includes(text.toLowerCase());
      return codigo | descricao;
    });
  }

  if (type === "Areas") {
    NewData = data.filter((Item) => {
      const codigo = Item.codigo.includes(text);
      const descricao = Item.descricao.toLowerCase().includes(text.toLowerCase());
      const planta = Item.planta.toLowerCase().includes(text.toLowerCase());
      return codigo | descricao | planta;
    });
  }

  if (type === "ServersPIMS") {
    NewData = data.filter((Item) => {
      const title = Item.title.includes(text);
      const odbc = Item.odbc.toLowerCase().includes(text.toLowerCase());
      return title | odbc;
    });
  }

  return NewData;
};

export const InnerJoins = (data: any[], type: string) => {
  var NewData = Copy(data);

  if (type === "Areas") {
    NewData = NewData.map((Item) => {
      const ItemPlanta = Plantas.find((planta) => planta.codigo === Item.planta);
      Item.planta = ItemPlanta.descricao;
      return Item;
    });
  }

  return NewData;
};
