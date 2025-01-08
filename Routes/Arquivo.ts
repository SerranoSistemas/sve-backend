import express, { Request, Response } from "express";
import { PDFBase64 } from "../Data/PDF";

const Router = express.Router();

Router.get("/ler-pdf", (REQ: Request, RES: Response) => {
  return RES.status(200).send(PDFBase64);
});

Router.post("/enviar", (REQ: Request, RES: Response) => {
  return RES.status(200).send(PDFBase64);
});

export { Router };
