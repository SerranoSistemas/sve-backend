import express, { Request, Response } from "express";
import { Filter, FilterByKey, GetElementByID, GetList, GetResponse, InnerJoins, PaginateAndSort } from "../Lib/Utils";
import { GetPagination } from "../Data/Pagination";
import { Medidores } from "../Data/Medidores";
import {
  CadastroDELETEResponse,
  CadastroPOSTResponse,
  CadastroPUTResponse,
  GetElementByIDResponse,
} from "../Lib/Responses";

const DATA = Medidores;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  //FILTROS E PAGINAÇÂO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const unidadeDeMedidaPims = REQ.query?.unidadeDeMedidaPims?.toString();
  const unidadeDeMedidaSAP = REQ.query?.unidadeDeMedidaSAP?.toString();
  const unidadeDeMedidaSVE = REQ.query?.unidadeDeMedidaSVE?.toString();
  const area = REQ.query?.area?.toString();
  const produto = REQ.query?.produto?.toString();
  const estacaoDeMedicao = REQ.query?.estacaoDeMedicao?.toString();
  const servidorPims = REQ.query?.servidorPims?.toString();
  const depositoSAP = REQ.query?.depositoSAP?.toString();
  const cliente = REQ.query?.cliente?.toString();
  const medidorParceiro = REQ.query?.medidorParceiro?.toString();

  const FiltreredData1 = FilterByKey(DATA, "unidadeDeMedidaPims", unidadeDeMedidaPims);
  const FiltreredData2 = FilterByKey(FiltreredData1, "unidadeDeMedidaSAP", unidadeDeMedidaSAP);
  const FiltreredData3 = FilterByKey(FiltreredData2, "unidadeDeMedidaSVE", unidadeDeMedidaSVE);
  const FiltreredData4 = FilterByKey(FiltreredData3, "area", area);
  const FiltreredData5 = FilterByKey(FiltreredData4, "produto", produto);
  const FiltreredData6 = FilterByKey(FiltreredData5, "estacaoDeMedicao", estacaoDeMedicao);
  const FiltreredData7 = FilterByKey(FiltreredData6, "servidorPims", servidorPims);
  const FiltreredData8 = FilterByKey(FiltreredData7, "servidorPims", servidorPims);
  const FiltreredData9 = FilterByKey(FiltreredData8, "depositoSAP", depositoSAP);
  const FiltreredData10 = FilterByKey(FiltreredData9, "cliente", cliente);
  const FiltreredData11 = FilterByKey(FiltreredData10, "medidorParceiro", medidorParceiro);

  const JoinedData = InnerJoins(FiltreredData11, "Medidores");
  const FilteredData = Filter(JoinedData, Text);

  const PaginatedData = PaginateAndSort(FilteredData, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(DATA));
  return RES.status(200).json(Response);
});

Router.get("/select-parceiros", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(DATA));
  return RES.status(200).json(Response);
});

Router.get("/select-cliente-produto", (REQ: Request, RES: Response) => {
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
