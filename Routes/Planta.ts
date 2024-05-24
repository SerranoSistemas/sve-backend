import express, { Request, Response } from "express";
import { Plantas } from "../Data/Planta";
import { Middleware } from "../Lib/Utils";

const PlantaRouter = express.Router();
const HTTP_GET = PlantaRouter.get.bind(PlantaRouter);
const HTTP_POST = PlantaRouter.post.bind(PlantaRouter);
const HTTP_DELETE = PlantaRouter.delete.bind(PlantaRouter);
const HTTP_PUT = PlantaRouter.put.bind(PlantaRouter);

// Middleware para parsear JSON
PlantaRouter.use(express.json());

PlantaRouter.use(Middleware);

HTTP_GET("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Data: Plantas,
  });
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Data: `Detalhes da Planta com ID: ${ID}`,
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Message: `Editando Planta com ID: ${ID}`,
    Data: REQ.body,
  });
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Message: "Dados Recebidos",
    Data: REQ.body,
  });
});

HTTP_DELETE("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Message: `Deletando PLanta com ID: ${ID}`,
  });
});

export default PlantaRouter;
