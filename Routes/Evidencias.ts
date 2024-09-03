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

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Type = REQ.query.tipo as string;
  const User = REQ.query.usuario as string;

  const FilteredEvidencias = Evidencias.filter((Ev) => {
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
