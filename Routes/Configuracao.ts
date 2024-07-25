import express, { Request, Response } from "express";
import cors from "cors";
import { Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";

const Router = express.Router();

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {
      nomeDoSistema: "Q 2 RS",
      servidorTibco: "Servidor TIBCO",
      servidorEscritaPims: "PIMS5",
      sapVKORG: "BR10",
      sapPONO: "10",
      sapSIST: "UNIB-RS",
      emailServidor: "Email Servidor ",
      emailConta: "Email Conta",
      emailSenha: "Email Senha ",
      emailPorta: "Email Porta",
      adDominio: "AD dominio",
      adUsuario: "AD dominio",
      adHost: "AD dominio",
      comunicarComPims: "1", //Vem em string 0 OU 1
      horarioDeCorte: "03:00", //'00:00'
      horarioTransferenciasAutomaticas: "10:00",
      idiomaPrimario: {
        pt: "Teste PT",
        en: "Teste EN",
        es: "Teste ES",
      },
      idiomaSecundario: {
        pt: "Teste PT",
        en: "Teste EN",
        es: "Teste ES",
      },
    },
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

Router.put("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: `Editando Configurações`,
  };

  RES.status(200).json(Response);
});

export { Router };
