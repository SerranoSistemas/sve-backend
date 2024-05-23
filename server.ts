import express, { Request, Response } from "express";

import PlantaRouter from "./Routes/Planta";

const APP = express();

APP.get("/", (req: Request, res: Response) =>
  res.status(200).json({ message: "Bem vindo ao Sistema de Medição" })
);

APP.use("/planta", PlantaRouter);

APP.listen(3000, () => console.log("Server is running on port 3000"));

export default APP;
