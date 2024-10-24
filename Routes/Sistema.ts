import express, { Request, Response } from "express";
import { Base64 } from "../Data/Logotipo";

const Router = express.Router();

Router.get("/logotipo", (REQ: Request, RES: Response) => {
  return RES.status(200).send(Base64);
});

Router.post("/logotipo", (REQ: Request, RES: Response) => {
  const Response = {
    data: {},
    sucesso: true,
    mensagem: "Imagem Inserida com Sucesso!",
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
    idiomaPrimario: {
      pt: "Primario",
      en: "Primary",
      es: "Primario",
    },
    idiomaSecundario: {
      pt: "Secundário",
      en: "Secondary",
      es: "Secundario",
    },
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //MODULO DE SAP
      // { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //MODULO DE ADM
      // { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MODULO DE MOVIMENTACAO
      // { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA }, 
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //MODULO DE CADASTRO
      // { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },

      //MODULO DE RELATORIO
      // { chave: "5", valor: ESCRITA },
      { chave: "5.1", valor: ESCRITA },
      { chave: "5.2", valor: ESCRITA },
      { chave: "5.3", valor: ESCRITA },
    ],
  };

  const Response = {
    data: Data,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

export { Router };
