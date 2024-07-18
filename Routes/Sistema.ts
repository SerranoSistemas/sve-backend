import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";
import { Middleware } from "../Lib/Utils";
import { Base64 } from "../Data/Logotipo";

const Router = express.Router();

//Apply JSON parse
Router.use(express.json());
//Apply Middleware
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/logotipo", (REQ: Request, RES: Response) => {
  const Response = {
    data: Base64,
    success: true,
    message: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.get("/inicio", (REQ: Request, RES: Response) => {
  const Data = {
    nomeDoUsuario: "Usuário",
    nomeDoSistema: "Q 2 RS",
    urlLogotipo: "https://sve-backend.vercel.app/sistema/logotipo",
    idiomaPrimario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
    idiomaSecundario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
    permissoes: [
      { chave: "1", valor: 10 },
      { chave: "1.1", valor: 10 },
      { chave: "1.3", valor: 10 },
      { chave: "1.4", valor: 20 },

      { chave: "3", valor: 20 },
      { chave: "3.1", valor: 20 },
      { chave: "3.2", valor: 20 },
      { chave: "3.3", valor: 20 },
    ],
  };

  const Response = {
    data: Data,
    success: true,
    message: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

export { Router };
