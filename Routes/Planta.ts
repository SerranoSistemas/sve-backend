import express, { Request, Response } from "express";
import cors from "cors";
import { Plantas, PlantasDropdown } from "../Data/Planta";
import { Filter, GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { GetPagination } from "../Data/Pagination";

const Router_Planta = express.Router();
const HTTP_GET = Router_Planta.get.bind(Router_Planta);
const HTTP_POST = Router_Planta.post.bind(Router_Planta);
const HTTP_DELETE = Router_Planta.delete.bind(Router_Planta);
const HTTP_PUT = Router_Planta.put.bind(Router_Planta);

//Apply JSON parse
Router_Planta.use(express.json());
//Apply Middleware for Delay and Error simulation
Router_Planta.use(Middleware);
// Use o middleware CORS
Router_Planta.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";

  const FilteredData = Filter(Plantas, Text, "Plantas");

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
    data: PlantasDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(Plantas, REQ.params.id);

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
    message: `Editando Planta com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Planta`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Planta com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export default Router_Planta;
