import express, { Request, Response } from "express";
import cors from "cors";
import { GetElementByID, Middleware, PaginateAndSort } from "../Lib/Utils";
import { ResponseType } from "../Data/Types";
import { EstacoesMedicao, EstacoesMedicaoDropdown } from "../Data/EstacaoMedicao";

const EstacaoMedicaoRouter = express.Router();
const HTTP_GET = EstacaoMedicaoRouter.get.bind(EstacaoMedicaoRouter);
const HTTP_POST = EstacaoMedicaoRouter.post.bind(EstacaoMedicaoRouter);
const HTTP_DELETE = EstacaoMedicaoRouter.delete.bind(EstacaoMedicaoRouter);
const HTTP_PUT = EstacaoMedicaoRouter.put.bind(EstacaoMedicaoRouter);

//Apply JSON parse
EstacaoMedicaoRouter.use(express.json());
//Apply Middleware for Delay and Error simulation
EstacaoMedicaoRouter.use(Middleware);
// Use o middleware CORS
EstacaoMedicaoRouter.use(cors());

HTTP_GET("/", (REQ: Request, RES: Response) => {
  const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = PaginateAndSort(EstacoesMedicao, REQ.body.pagination);

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
    data: EstacoesMedicaoDropdown,
    success: true,
    message: "Dados processados com sucesso",
  };

  return RES.status(200).json(Response);
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(EstacoesMedicao, REQ.params.id);

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
    message: `Editando Estaçãode Medição com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: REQ.body,
    success: true,
    message: `Adicionando Estaçãode Medição`,
  };

  RES.status(200).json(Response);
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const Response: ResponseType = {
    data: {},
    success: true,
    message: `Deletando Estaçãode Medição com ID: ${REQ.params.id}`,
  };

  RES.status(200).json(Response);
});

export default EstacaoMedicaoRouter;
