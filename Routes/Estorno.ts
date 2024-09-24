import express, { Request, Response } from "express";
import { GetResponse } from "../Lib/Utils";
import { Estornos } from "../Data/Estornos";

const DATA = Estornos;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Response = GetResponse(DATA);
  return RES.status(200).json(Response);
});

export { Router };
