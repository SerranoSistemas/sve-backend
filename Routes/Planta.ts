import express, { Request, Response } from "express";
import { Plantas } from "../Data/Planta";
import { CheckDelay } from "../Lib/Utils";

const PlantaRouter = express.Router();
const HTTP_GET = PlantaRouter.get.bind(PlantaRouter);
const HTTP_POST = PlantaRouter.post.bind(PlantaRouter);
const HTTP_DELETE = PlantaRouter.delete.bind(PlantaRouter);
const HTTP_PUT = PlantaRouter.put.bind(PlantaRouter);

PlantaRouter.use(CheckDelay);

HTTP_GET("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Code: 200,
    Data: Plantas,
  });
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Code: 200,
    Data: `Detalhes da Planta com ID: ${ID}`,
  });
});

HTTP_PUT("/:id", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Code: 200,
    Data: `Editando Planta com ID: ${ID}`,
  });
});

HTTP_POST("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Code: 200,
    Data: `Inserindo Planta`,
  });
});

HTTP_DELETE("/", (REQ: Request, RES: Response) => {
  const ID = REQ.params.id;
  RES.status(200).json({
    Code: 200,
    Data: `Deletando PLanta com ID: ${ID}`,
  });
});

export default PlantaRouter;
