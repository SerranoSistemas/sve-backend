import express, { Request, Response } from "express";
import cors from "cors";
import { Middleware } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { FundoEscala, GenerateFundoEscala } from "../Data/FundoEscala";

const Router = express.Router();

// Apply JSON parse
Router.use(express.json());
// Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/", (REQ: Request, RES: Response) => {
  const mesAnoParam = REQ.query.mesAno as string;
  if (!mesAnoParam) {
    return RES.status(400).json({ sucesso: false, mensagem: "Parâmetro 'minMes' é obrigatório" });
  }

  const [month, year] = mesAnoParam.split("/").map(Number);
  if (isNaN(month) || isNaN(year)) {
    return RES.status(400).json({ sucesso: false, mensagem: "Parâmetro 'mesAno' deve estar no formato MM/YYYY" });
  }

  const startDate = new Date(year, month - 1, 1);
  const today = new Date();
  const endDate = today.getMonth() === month - 1 && today.getFullYear() === year ? today : new Date(year, month, 0); // Último dia do mês se o mês não for o atual

  const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  const fundosEscala: FundoEscala[] = [];
  let previousValueMedicao: number | null = null;

  for (let i = 0; i < daysDifference; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const fundoEscala = GenerateFundoEscala(date, previousValueMedicao);
    fundosEscala.push(fundoEscala);
    previousValueMedicao = fundoEscala.valorMedicao;
  }

  const response: ResponseType = {
    data: fundosEscala,
    sucesso: true,
    mensagem: "Dados processados com sucesso",
    page: {
      totalPages: 1,
      currentPage: 1,
      rowsPerPage: fundosEscala.length,
      totalRows: fundosEscala.length,
    },
  };

  return RES.status(200).json(response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const response: ResponseType = {
    data: REQ.body,
    sucesso: true,
    mensagem: "Dados Recebidos",
  };

  RES.status(200).json(response);
});

export { Router };