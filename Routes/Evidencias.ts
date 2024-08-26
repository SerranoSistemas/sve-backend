import express, { Request, Response } from "express";
import { ResponseType } from "../Data/Types";
import { Evidencias } from "../Data/Evidencias";
import { GetPagination } from "../Data/Pagination";
import { GetResponse, PaginateAndSort } from "../Lib/Utils";

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const PaginatedData = PaginateAndSort(Evidencias, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

export { Router };
