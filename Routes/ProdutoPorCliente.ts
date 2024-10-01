import express, { Request, Response } from "express";
import { Filter, FilterByKey, GetElementByID, GetList, GetResponse, InnerJoins, PaginateAndSort } from "../Lib/Utils";
import { Produtos } from "../Data/Produto";
import { ProdutosPorCliente } from "../Data/ProdutosPorCliente";
import { GetPagination } from "../Data/Pagination";
import { CadastroDELETEResponse, CadastroPOSTResponse, CadastroPUTResponse } from "../Lib/Responses";

const DATA = Produtos;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  //FILTROS E PAGINAÇÂO
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";
  const Cliente = REQ.query?.cliente?.toString() || "";
  const Produto = REQ.query?.produto?.toString() || "";
  const DepositoDeOrigem = REQ.query?.depositoDeOrigem?.toString() || "";
  const DepositoDeDestino = REQ.query?.depositoDeDestino?.toString() || "";
  const DepositoDeDestino2 = REQ.query?.depositoDeDestino2?.toString() || "";

  const FiltreredData1 = FilterByKey(ProdutosPorCliente, "cliente", Cliente);
  const FiltreredData2 = FilterByKey(FiltreredData1, "produto", Produto);
  const FiltreredData3 = FilterByKey(FiltreredData2, "depositoDeOrigem", DepositoDeOrigem);
  const FiltreredData4 = FilterByKey(FiltreredData3, "depositoDeDestino", DepositoDeDestino);
  const FiltreredData5 = FilterByKey(FiltreredData4, "depositoDeDestino2", DepositoDeDestino2);

  const JoinedData = InnerJoins(FiltreredData5, "ProdutosPorCliente");
  const FilteredData = Filter(JoinedData, Text);
  const PaginatedData = PaginateAndSort(FilteredData, Pagination);

  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

Router.get("/select", (REQ: Request, RES: Response) => {
  const Cliente = REQ.query?.cliente?.toString() || "";
  const FiltreredData1 = FilterByKey(ProdutosPorCliente, "cliente", Cliente);

  const NewData = FiltreredData1.map((Item) => {
    const Produto = Produtos.find((produto) => produto.uuid === Item.produto);

    return {
      descricao: Produto.descricao,
      uuid: Produto.uuid,
    };
  });

  const Response = GetResponse(GetList(Produtos));
  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(ProdutosPorCliente, REQ.params.id);

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
