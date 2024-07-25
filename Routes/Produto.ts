import express, { Request, Response } from "express";
import cors from "cors";
import { Filter, FilterByKey, GetElementByID, GetList, InnerJoins, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";
import { Produtos } from "../Data/Produto";

const OBJECT = "Produto";

const Router = express.Router();

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/", (REQ: Request, RES: Response) => {
  //FITROS E PAGINACAO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const UnidadeMedida = REQ.query?.unidadeMedida?.toString() || "";

  const FilteredJoins = FilterByKey(Produtos, "unidadeMedida", UnidadeMedida);
  const JoinedData = InnerJoins(FilteredJoins, "Produtos");
  const FilteredData = Filter(JoinedData, Text);

  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(FilteredData, Pagination);
  const Response: ResponseType = {
    data: paginatedData || [],
    sucesso: true,
     mensagem:  "Dados processados com sucesso",
    page: {
      totalRows,
      currentPage,
      totalPages,
      rowsPerPage,
    },
  };

  return RES.status(200).json(Response);
});

Router.get("/get-list", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: GetList(Produtos),
    sucesso: true,
     mensagem:  "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(Produtos, REQ.params.id);

  RES.status(200).json({
    data: data || {},
    sucesso: data ? true : false,
     mensagem:  data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

Router.put("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    sucesso: true,
     mensagem:  `Editando ${OBJECT} com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    sucesso: true,
     mensagem:  `Adicionando ${OBJECT}`,
  };

  RES.status(200).json(Response);
});

Router.delete("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    sucesso: true,
     mensagem:  `Deletando ${OBJECT} com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export { Router };
