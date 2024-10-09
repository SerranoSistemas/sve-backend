import express, { Request, Response } from "express";
import { Filter, FilterByKey, GetElementByID, GetList, GetResponse, InnerJoins, PaginateAndSort } from "../Lib/Utils";
import { Areas } from "../Data/Area";
import { GetPagination } from "../Data/Pagination";
import { CadastroDELETEResponse, CadastroPOSTResponse, CadastroPUTResponse } from "../Lib/Responses";

const DATA = Areas;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  //FILTROS E PAGINAÇÂO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const Planta = REQ.query?.plantas?.toString() || "";

  const FilteredJoins = FilterByKey(DATA, "planta", Planta);
  const JoinedData = InnerJoins(FilteredJoins, "Areas");
  const FilteredData = Filter(JoinedData, Text);

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

  RES.status(200).json({
    data: data || {},
    sucesso: data ? true : false,
    mensagem: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
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
