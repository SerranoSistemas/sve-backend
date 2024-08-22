import express, { Request, Response } from "express";
import { ResponseType } from "../Data/Types";
import { Medicoes } from "../Data/Medicao";
import { DetalhamentoDeMedicao, gerarDetalhamentos } from "../Data/Medicao.Detalhamento";

const Router = express.Router();

Router.get("/listar-medidores", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: Medicoes,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.post("/detalhes", (REQ: Request, RES: Response) => {
  const data = REQ.body.data as string;

  const [, mes, ano] = data.split("/");

  const detalhamentos = gerarDetalhamentos(`${mes}/${ano}`);

  const response: ResponseType = {
    data: detalhamentos,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(response);
});


Router.post("/salvar", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

export { Router };
