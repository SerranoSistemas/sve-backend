import express, { Request, Response } from "express";
import { ResponseType } from "../Data/Types";
import { FundoEscala, GenerateFundoEscala } from "../Data/FundoEscala";
import { FilterByKey, GetList, GetResponse } from "../Lib/Utils";
import { ProdutosPorCliente } from "../Data/ProdutosPorCliente";
import { Produtos } from "../Data/Produto";
import { Medidores } from "../Data/Medidores";
import { Clientes } from "../Data/Clientes";

const Router = express.Router();

Router.get("/detalhes", (REQ: Request, RES: Response) => {
  const mesAnoParam = REQ.query.data as string;
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

Router.get("/cliente/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(Clientes));
  return RES.status(200).json(Response);
});

Router.get("/produto/select", (REQ: Request, RES: Response) => {
  const Cliente = REQ.query?.clientes || "";
  const FiltreredData1 = FilterByKey(ProdutosPorCliente, "cliente", Cliente);

  const NewData = FiltreredData1.map((Item) => {
    const Produto = Produtos.find((produto) => produto.uuid === Item.produto);

    return {
      descricao: Produto.descricao,
      uuid: Produto.uuid,
    };
  });

  const Response = GetResponse(GetList(NewData));
  return RES.status(200).json(Response);
});

Router.get("/medidor/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(Medidores));
  return RES.status(200).json(Response);
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
