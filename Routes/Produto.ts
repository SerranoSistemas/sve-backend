import express, { Request, Response } from "express";
import cors from "cors";
import {
  Filter,
  FilterByKey,
  GetElementByID,
  GetList,
  GetResponse,
  InnerJoins,
  Middleware,
  PaginateAndSort,
} from "../Lib/Utils";
import { GetPagination } from "../Data/Pagination";
import { Produtos } from "../Data/Produto";
import {
  CadastroDELETEResponse,
  CadastroPOSTResponse,
  CadastroPUTResponse,
  GetElementByIDResponse,
} from "../Lib/Responses";

const DATA = Produtos;

const Router = express.Router();

Router.use(express.json());
Router.use(Middleware);
Router.use(cors());

Router.get("/", (REQ: Request, RES: Response) => {
  //FITROS E PAGINACAO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const UnidadeMedida = REQ.query?.unidadeMedida?.toString() || "";

  const FilteredJoins = FilterByKey(Produtos, "unidadeMedida", UnidadeMedida);
  const JoinedData = InnerJoins(FilteredJoins, "Produtos");
  const FilteredData = Filter(JoinedData, Text);

  const PaginatedData = PaginateAndSort(FilteredData, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(Produtos));
  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(DATA, REQ.params.id);
  const Response = GetElementByIDResponse(data);
  RES.status(200).json(Response);
});

Router.put("/:id", (REQ: Request, RES: Response) => {
  const Response = CadastroPUTResponse(REQ.body);
  RES.status(200).json(Response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const Response = CadastroPOSTResponse(REQ.body);
  RES.status(200).json(Response);
});

Router.delete("/:id", (REQ: Request, RES: Response) => {
  const Response = CadastroDELETEResponse(REQ.body);
  RES.status(200).json(Response);
});

export { Router };
