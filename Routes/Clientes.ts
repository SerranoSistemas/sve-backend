import express, { Request, Response } from "express";
import { Filter, GetElementByID, GetList, GetResponse, PaginateAndSort } from "../Lib/Utils";
import { GetPagination } from "../Data/Pagination";
import { Clientes } from "../Data/Clientes";
import {
  CadastroDELETEResponse,
  CadastroPOSTResponse,
  CadastroPUTResponse,
  GetElementByIDResponse,
} from "../Lib/Responses";

const DATA = Clientes;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  //FILTROS E PAGINAÇÂO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";

  const FilteredData = Filter(DATA, Text);

  const PaginatedData = PaginateAndSort(FilteredData, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(DATA));
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
