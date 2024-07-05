import { ServersPIMS } from "./../Data/Types";
import express, { Request, Response } from "express";
import cors from "cors";
import { Filter, GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";
import { PIMSServers, PIMSServersDropdown } from "../Data/ServersPIMS";

const Router_ServersPIMS = express.Router();
const HTTP_GET = Router_ServersPIMS.get.bind(Router_ServersPIMS);
const HTTP_POST = Router_ServersPIMS.post.bind(Router_ServersPIMS);
const HTTP_DELETE = Router_ServersPIMS.delete.bind(Router_ServersPIMS);
const HTTP_PUT = Router_ServersPIMS.put.bind(Router_ServersPIMS);

//Apply JSON parse
Router_ServersPIMS.use(express.json());
//Apply Middleware for Delay and Error simulation
Router_ServersPIMS.use(Middleware);
// Use o middleware CORS
Router_ServersPIMS.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";

  const FilteredData = Filter(PIMSServers, Text, "ServersPIMS");

  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(FilteredData, Pagination);

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

HTTP_GET("/select", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: PIMSServersDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(PIMSServers, REQ.params.id);

  RES.status(200).json({
    data: data || {},
    success: data ? true : false,
    message: data ? "Dados processados com sucesso" : "Dado não encontrado",
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Editando Servidor PIMS com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Servidor PIMS`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Servidor PIMS com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export default Router_ServersPIMS;
