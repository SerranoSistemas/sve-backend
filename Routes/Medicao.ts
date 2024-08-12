import express, { Request, Response } from "express";
import cors from "cors";
import { Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";

import { Medicoes } from "../Data/Medicao";
import { DetalhamentoDeMedicao } from "../Data/Medicao.Detalhamento";

const OBJECT = "Produto";

const Router = express.Router();

Router.use(express.json());
Router.use(Middleware);
Router.use(cors());

Router.get("/totalizadores", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: Medicoes,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.get("/detalhamento", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: DetalhamentoDeMedicao,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

export { Router };
