import express, { Request, Response } from "express";
import { Evidencias } from "../Data/Evidencias";
import { GetPagination } from "../Data/Pagination";
import { GetResponse, PaginateAndSort } from "../Lib/Utils";

const TypesMap = {
  I: "Inclusão",
  U: "Alteração",
  D: "Exclusão",
  W: "Alerta",
  E: "Erro",
};

const randomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

function getRandomType(typesMap: Record<string, string>): { key: string; value: string } {
  const keys = Object.keys(typesMap); // Obtém todas as chaves do objeto
  const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Seleciona uma chave aleatória
  const value = typesMap[randomKey]; // Obtém o valor correspondente
  return { key: randomKey, value };
}

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Type = REQ.query.tipo as string;
  const User = REQ.query.usuario as string;

  const startDate = new Date("2024-01-01");

  const Data = Evidencias.map((Evidencia) => {
    return { ...Evidencia, dataHora: randomDate(startDate, new Date()), tipo: getRandomType(TypesMap).key };
  });

  const FilteredEvidencias = Data.filter((Ev) => {
    const TypeFilter = Type ? Ev.tipo === TypesMap[Type] : true;
    const UserFilter = User ? Ev.usuario.toLocaleLowerCase().includes(User.toLocaleLowerCase()) : true;

    return TypeFilter && UserFilter;
  });

  const Pagination = GetPagination(REQ);
  const PaginatedData = PaginateAndSort(FilteredEvidencias, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

export { Router };
