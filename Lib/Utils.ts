import { NextFunction, Request, Response } from "express";

import { Plantas } from "../Data/Planta";
import { DefaultPagination } from "../Data/Pagination";
import { UnidadesDeMedida } from "../Data/UnidadesDeMedida";

export const Copy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export const Middleware = (REQ: Request, RES: Response, NEXT: NextFunction) => {
  if (REQ.query.gerarErro) {
    const ErrorResponse = {
      data: {},
      sucesso: false,
      mensagem: "Ocorreu um Erro, tente novamente",
      page: {},
    };

    return RES.status(500).json(ErrorResponse);
  }

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

export const GetElementByID = (data, Id, List?: string) => {
  return data.find((Element) => Element.uuid === Id || Element.identificador === Id);
};

export const Filter = (data, text, type?: string) => {
  if (!text) return data;

  return data.filter((item) => {
    return Object.keys(item).some((key) => {
      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(text.toLowerCase());
    });
  });
};

export const FilterByKey = (data, key, value) => {
  if (!value) return data;
  return data.filter((item) => item[key] === value);
};

export const GetList = (Data) => {
  return Data.map((Item) => {
    return {
      descricao: Item.descricao,
      uuid: Item.uuid,
    };
  });
};

export const InnerJoins = (data: any[], type: string) => {
  var NewData = Copy(data);
  var RefData;
  var Key;

  if (type === "Areas") {
    RefData = Plantas;
    Key = "planta";
  }
  if (type === "Produtos") {
    RefData = UnidadesDeMedida;
    Key = "unidadeMedida";
  }

  NewData = NewData.map((Item) => {
    const RefDataUnit = RefData.find((item) => item.uuid === Item[Key]);
    Item[Key] = RefDataUnit?.descricao || "";
    return Item;
  });

  return NewData;
};

export const GenerateRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const GetResponse = (PaginatedNada: any) => {
  const Response = {
    data: PaginatedNada.paginatedData,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: {
      totalRows: PaginatedNada.totalRows,
      currentPage: PaginatedNada.currentPage,
      totalPages: PaginatedNada.totalPages,
      rowsPerPage: PaginatedNada.rowsPerPage,
    },
  };

  return Response;
};
