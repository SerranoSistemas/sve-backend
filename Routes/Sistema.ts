import express, { Request, Response } from "express";
import { Base64 } from "../Data/Logotipo";
import sql from "mssql";

const Router = express.Router();

const config = {
  user: "svc_sge",
  password: "SGE@br@sk3m",
  server: "PP1SGE03",
  database: "CSTDBBSK",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

Router.get("/teste", async (REQ: Request, RES: Response) => {
  try {
    await sql.connect(config);
    RES.status(200).json({ success: true, message: "Conexão bem-sucedida!" });
  } catch (err: any) {
    RES.status(500).json({ success: false, message: "Falha na conexão: " + err.message });
  }
});

Router.get("/logotipo", (REQ: Request, RES: Response) => {
  return RES.status(200).send(Base64);
});

Router.get("/teste", (REQ: Request, RES: Response) => {
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
  const ESCRITA = 20;

  const Data = {
    nomeDoUsuario: "Usuário",
    email: "usuario@sve2.com",
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
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },
      { chave: "3.4", valor: ESCRITA },
      { chave: "3.5", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },
      { chave: "5.1", valor: ESCRITA },
      { chave: "5.2", valor: ESCRITA },
      { chave: "5.3", valor: ESCRITA },
    ],
  };

  return RES.status(200).json({ data: Data, sucesso: true, mensagem: "Dados processados com sucesso", page: null });
});

Router.get("/pdf", (REQ: Request, RES: Response) => {
  return RES.status(200).send("TestePDF.pdf");
});

export { Router };
