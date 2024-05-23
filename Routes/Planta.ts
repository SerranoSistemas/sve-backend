import expRESs, { Request, Response } from "express";
import { Plantas } from "../Data/Planta";
import { CheckDelay } from "../Lib/Utils";

const PlantaRouter = expRESs.Router();
const HTTP_GET = PlantaRouter.get.bind(PlantaRouter);
const HTTP_POST = PlantaRouter.post.bind(PlantaRouter);
const HTTP_DELETE = PlantaRouter.delete.bind(PlantaRouter);
const MIDDLEWARE = PlantaRouter.param.bind(PlantaRouter);

PlantaRouter.use(CheckDelay);

HTTP_GET("/", (REQ: Request, RES: Response) => {
  RES.status(200).json({
    Code: 200,
    Data: Plantas,
  });
});

HTTP_GET("/:id", (REQ: Request, RES: Response) => {
  const userId = REQ.params.id;
  RES.status(200).json({
    message: `User details for user with ID: ${userId}`,
  });
});

export default PlantaRouter;
