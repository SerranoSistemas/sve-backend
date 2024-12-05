import express, { Request, Response } from "express";
import { GetResponse } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GenerateEstornos } from "../Data/Estornos";

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const DATA = GenerateEstornos();



  const Response = GetResponse(DATA);
  return RES.status(200).json(Response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: "Dados Recebidos",
    page: null,
  };

  RES.status(200).json(response);
});

Router.put("/", (REQ: Request, RES: Response) => {
  const response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: "Dados Recebidos",
    page: null,
  };

  RES.status(200).json(response);
});

export { Router };
