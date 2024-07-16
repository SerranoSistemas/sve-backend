import express, { Request, Response } from "express";
import cors from "cors";
import { Filter, GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";
import { UnidadeMedidasDropdown, UnidadesDeMedida } from "../Data/UnidadesDeMedida";

const Router_UnidadesDeMedida = express.Router();
const HTTP_GET = Router_UnidadesDeMedida.get.bind(Router_UnidadesDeMedida);
const HTTP_POST = Router_UnidadesDeMedida.post.bind(Router_UnidadesDeMedida);
const HTTP_DELETE = Router_UnidadesDeMedida.delete.bind(Router_UnidadesDeMedida);
const HTTP_PUT = Router_UnidadesDeMedida.put.bind(Router_UnidadesDeMedida);

//Apply JSON parse
Router_UnidadesDeMedida.use(express.json());
//Apply Middleware for Delay and Error simulation
Router_UnidadesDeMedida.use(Middleware);
// Use o middleware CORS
Router_UnidadesDeMedida.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";

  const FilteredData = Filter(UnidadesDeMedida, Text, "UnidadesDeMedida");

  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(FilteredData, Pagination);

  const Response: ResponseType = {
    data: paginatedData,
    success: true,
    message: "Dados processados com sucesso",
    page: {
      totalRows,
      currentPage,
      totalPages,
      rowsPerPage,
    },
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/get-list", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: UnidadeMedidasDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(UnidadesDeMedida, REQ.params.id);

  RES.status(200).json({
    data: data || {},
    success: data ? true : false,
    message: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Editando Unidade de Medida com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Unidade de Medida`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Unidade de Medida com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export default Router_UnidadesDeMedida;
