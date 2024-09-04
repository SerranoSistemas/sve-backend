import express, { Request, Response } from "express";
import { GetElementByID, GetList } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GruposDeRede } from "../Data/GruposDeRede";

const Router = express.Router();

Router.get("/", (req: Request, res: Response) => res.status(200).json({ mensagem: "Módulo de Grupos de Rede" }));

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: GetList(GruposDeRede),
    sucesso: true,
    mensagem: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

export { Router };
