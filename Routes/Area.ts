import express, { Request, Response } from "express";
import cors from "cors";
import { GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { Areas, AreasDropdown } from "../Data/Area";

const Router_Area = express.Router();
const HTTP_GET = Router_Area.get.bind(Router_Area);
const HTTP_POST = Router_Area.post.bind(Router_Area);
const HTTP_DELETE = Router_Area.delete.bind(Router_Area);
const HTTP_PUT = Router_Area.put.bind(Router_Area);

//Apply JSON parse
Router_Area.use(express.json());
//Apply Middleware for Delay and Error simulation
Router_Area.use(Middleware);
// Use o middleware CORS
Router_Area.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(Areas, REQ.body.pagination);

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
    data: AreasDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(Areas, REQ.params.id);

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
    message: `Editando Area com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Area`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Area com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export default Router_Area;
