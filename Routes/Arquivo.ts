import express, { Request, Response } from "express";
import { Base64 } from "../Data/Logotipo";
import { PDFBase64 } from "../Data/PDF";

const Router = express.Router();

Router.get("/ler-pdf", (REQ: Request, RES: Response) => {
  return RES.status(200).send(PDFBase64);
});

export { Router };
