import express, { Request, Response } from "express";

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

export { Router };
