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

Router.post("/logotipo", (REQ: Request, RES: Response) => {
  const Response = {
    data: {},
    success: true,
    message: "Imagem Inserida com Sucesso!", 
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.get("/inicio", (REQ: Request, RES: Response) => {
  const LEITURA = 10;
  const ESCRITA = 20;

  const Data = {
    nomeDoUsuario: "Usuário",
    nomeDoSistema: "Q 2 RS",
    urlLogotipo: "https://sve-backend.vercel.app/sistema/logotipo",
    idiomaPrimario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
    idiomaSecundario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //MODULO DE SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //MODULO DE ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MODULO DE MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //MODULO DE CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },
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
