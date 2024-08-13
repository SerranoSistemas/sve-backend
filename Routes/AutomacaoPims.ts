import express, { Request, Response } from "express";
import cors from "cors";
import { Middleware } from "../Lib/Utils";

const Router = express.Router();

Router.use(express.json());
Router.use(Middleware);
Router.use(cors());

Router.post("/leitura", (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

Router.post("/escrita", (REQ: Request, RES: Response) => {
  RES.status(200).json({});
});

export { Router };


