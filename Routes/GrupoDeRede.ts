import express, { Request, Response } from "express";
import cors from "cors";
import { GetElementByID, Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GruposDeRede, GruposDeRedeDropdown } from "../Data/GruposDeRede";

const Router = express.Router();
const HTTP_GET = Router.get.bind(Router);
const HTTP_POST = Router.post.bind(Router);
const HTTP_DELETE = Router.delete.bind(Router);
const HTTP_PUT = Router.put.bind(Router);

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

HTTP_GET("/get-list", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: GruposDeRedeDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(GruposDeRede, REQ.params.id, "GruposDeRede");

  RES.status(200).json({
    data: [...data?.permissoes] || [],
    success: data ? true : false,
    message: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Editando Permissões do Grupo de Rede com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export { Router };
