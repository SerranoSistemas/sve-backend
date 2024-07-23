import express, { Request, Response } from "express";
import cors from "cors";

import { Filter, GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";
import { Medicoes } from "../Data/Medicao";

const Router = express.Router();
const HTTP_GET = Router.get.bind(Router);

//Apply JSON parse
Router.use(express.json());
//Apply Middleware for Delay and Error simulation
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  var Pagination = GetPagination(REQ);

  Pagination.page = 1;
  Pagination.rows = 200;

  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(Medicoes, Pagination);

  const Response: ResponseType = {
    data: paginatedData,
    success: true,
    message: "Dados processados com sucesso",
    page: {
      totalRows,
      currentPage,
      totalPages,
      rowsPerPage,
    },
  };

  return RES.status(200).json(Response);
});

export { Router };
