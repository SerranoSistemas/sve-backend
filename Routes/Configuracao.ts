import express, { Request, Response } from "express";
import cors from "cors";

import { Filter, GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";

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

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {
      nomeDoUsuario: "Usuário",
      nomeDoSistema: "Q 2 RS",
      servidorTibco: null,
      sapVKORG: "BR10",
      sapPONO: "10",
      sapSIST: "UNIB-RS",
      servicorTibco: null,
      emailServidor: null,
      emailConta: null,
      emailSenha: null,
      emailPorta: null,
      comunicarComPims: "1", //Vem em string 0 OU 1
      horarioDeCorte: "03:00", //'00:00'
      horarioTransferenciasAutomaticas: "10:00",
      urlLogotipo: "https://sve-backend.vercel.app/sistema/logotipo",
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
    success: true,
    message: "Dados processados com sucesso",
    page: null,
  };

  return RES.status(200).json(Response);
});

HTTP_PUT("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Editando Configurações`,
  };

  RES.status(200).json(Response);
});

export { Router };
