import express, { Request, Response } from "express";
import cors from "cors";
import { GetElementByID, GetList, Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GruposDeRede } from "../Data/GruposDeRede";

const Router = express.Router();

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/", (req: Request, res: Response) => res.status(200).json({ message: "Módulo de Grupos de Rede" }));

Router.get("/get-list", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: GetList(GruposDeRede),
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(GruposDeRede, REQ.params.id);

  RES.status(200).json({
    data: [...data?.permissoes] || [],
    success: data ? true : false,
    message: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

Router.put("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Editando Permissões do Grupo de Rede com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export { Router };
