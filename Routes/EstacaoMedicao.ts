import express, { Request, Response } from "express";
import { Middleware } from "../Lib/Utils";
import { EstacoesMedicao } from "../Data/EstacaoMedicao";

const EstacaoMedicaoRouter = express.Router();
const HTTP_GET = EstacaoMedicaoRouter.get.bind(EstacaoMedicaoRouter);
const HTTP_POST = EstacaoMedicaoRouter.post.bind(EstacaoMedicaoRouter);
const HTTP_DELETE = EstacaoMedicaoRouter.delete.bind(EstacaoMedicaoRouter);
const HTTP_PUT = EstacaoMedicaoRouter.put.bind(EstacaoMedicaoRouter);

EstacaoMedicaoRouter.use(Middleware);

HTTP_GET("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Data: EstacoesMedicao,
  });
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Data: `Detalhes da Estação de Medição com ID: ${ID}`,
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  console.log(REQ.body);
  const ID = REQ.params.id;
  RES.status(200).json({
    Data: `Editando Estação de Medição com ID: ${ID}`,
  });
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  console.log(REQ.body);
  RES.status(200).json({
    Data: `Inserindo Estação de Medição`,
  });
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Data: `Deletando Estação de Medição com ID: ${ID}`,
  });
});

export default EstacaoMedicaoRouter;
