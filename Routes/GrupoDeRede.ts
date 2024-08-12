import express, { Request, Response } from "express";
import cors from "cors";
import { GetElementByID, GetList, Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GruposDeRede } from "../Data/GruposDeRede";

const Router = express.Router();

Router.use(express.json());
Router.use(Middleware);
Router.use(cors());

Router.get("/", (req: Request, res: Response) => res.status(200).json({ mensagem: "Módulo de Grupos de Rede" }));

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: GetList(GruposDeRede),
    sucesso: true,
    mensagem: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(GruposDeRede, REQ.params.id);

  RES.status(200).json({
    //@ts-ignore
    data: [...data?.permissoes] || [],
    sucesso: data ? true : false,
    mensagem: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

Router.put("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: `Editando Permissões do Grupo de Rede com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export { Router };
