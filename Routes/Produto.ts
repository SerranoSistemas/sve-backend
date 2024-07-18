import express, { Request, Response } from "express";
import cors from "cors";
import { Filter, GetElementByID, InnerJoins, Middleware, PaginateAndSort } from "../Lib/Utils";
import { Pagination, ResponseType } from "../Data/Types";

import { GetPagination, PaginaNationGetPage, PaginaNationGetRows, PaginationGetOrderBy } from "../Data/Pagination";
import { FilterProdutoJoins, FilterProdutoText, Produtos, ProdutosDropdown } from "../Data/Produto";

const Router = express.Router();
const HTTP_GET = Router.get.bind(Router);
const HTTP_POST = Router.post.bind(Router);
const HTTP_DELETE = Router.delete.bind(Router);
const HTTP_PUT = Router.put.bind(Router);

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const UnidadeMedida = REQ.query?.unidadeMedida?.toString() || "";
  const FilteredJoins = FilterProdutoJoins(Produtos, UnidadeMedida);
  const JoinedData = InnerJoins(FilteredJoins, "Produtos");
  const FilteredData = FilterProdutoText(JoinedData, Text);

  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(FilteredData, Pagination);
  const Response: ResponseType = {
    data: paginatedData || [],
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
    data: ProdutosDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(Produtos, REQ.params.id);

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
    message: `Editando Produto com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Produto`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Produto com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export { Router };
