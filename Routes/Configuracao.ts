import express, { Request, Response } from "express";
import { ResponseType } from "../Data/Types";

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {
      nomeDoSistema: "Q 2 RS",
      servidorTibco: "Servidor TIBCO",
      servidorEscritaPims: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5",
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
        pt: "Primário",
        en: "Primary",
        es: "Primario",
      },
      idiomaSecundario: {
        pt: "Secundário",
        en: "Secondary",
        es: "Secundario",
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

Router.post("/upload", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: `Editando Logotipo`,
  };

  RES.status(200).json(Response);
});

export { Router };
