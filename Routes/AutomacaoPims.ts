import express, { Request, Response } from "express";
import { RandomDelayMiddleware } from "../Lib/Middleware.RandonDelay";

const Router = express.Router();

Router.post("/leitura", (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

Router.post("/escrita", (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

Router.post("/transferencia", (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

Router.post("/planilhas", RandomDelayMiddleware, (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

export { Router };
