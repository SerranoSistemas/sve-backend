import express, { Request, Response } from "express";
import { GetResponse } from "../Lib/Utils";
import { GerarRelatorioComparativo } from "../Data/RelatorioComparativo";
import { GerarRelatorioEntregas } from "../Data/RelatorioEntregas";

const Router = express.Router();

Router.get("/comparativo", (REQ: Request, RES: Response) => {
  //Parametros
  const DataInicial = REQ.query?.dataInicial;
  const DataFinal = REQ.query?.dataFinal;
  const Cliente = REQ.query?.cliente;
  const Produtos = REQ.query?.produtos;
  const Subtotal = REQ.query?.subtotal;
  const Total = REQ.query?.total;
  const DiaADia = REQ.query?.dia;

  if (!Produtos || !Cliente || !DataInicial || !DataInicial) {
    return RES.status(400).json({ error: "Informação faltando" });
  }

  const Response = GerarRelatorioComparativo(DataInicial, DataFinal, Cliente, Produtos, DiaADia, Subtotal, Total);

  return RES.status(200).json(Response);
});

Router.get("/entregas", (REQ: Request, RES: Response) => {
  //Parametros
  const DataInicial = REQ.query?.dataInicial;
  const DataFinal = REQ.query?.dataFinal;
  const Cliente = REQ.query?.cliente;
  const Produtos = REQ.query?.produtos;
  const Subtotal = REQ.query?.subtotal;
  const Total = REQ.query?.total;
  const DiaADia = REQ.query?.dia;

  if (!Produtos || !Cliente || !DataInicial || !DataInicial) {
    return RES.status(400).json({ error: "Informação faltando" });
  }

  const Response = GerarRelatorioEntregas(DataInicial, DataFinal, Cliente, Produtos, DiaADia, Subtotal, Total);
  return RES.status(200).json(Response);
});

export { Router };
