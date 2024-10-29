import express, { Request, Response } from "express";
import { ResponseType } from "../Data/Types";
import { generateFakeAutomacoes } from "../Data/Automacoes";

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Data = generateFakeAutomacoes();

  const Response: ResponseType = {
    data: Data,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

export { Router };
