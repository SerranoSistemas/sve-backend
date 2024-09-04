import express, { Request, Response } from "express";
import { GetList, GetResponse } from "../Lib/Utils";
import { Produtos } from "../Data/Produto";

const DATA = Produtos;

const Router = express.Router();

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(Produtos));
  return RES.status(200).json(Response);
});

export { Router };
