import express, { Request, Response } from "express";

import Router_Planta from "./Routes/Planta";
import EstacaoMedicaoRouter from "./Routes/EstacaoMedicao";

const APP = express();

APP.get("/", (req: Request, res: Response) =>
  res.status(200).json({ message: "Bem vindo ao Sistema de Medição" })
);

APP.use("/planta", Router_Planta);
APP.use("/estacaoMedicao", EstacaoMedicaoRouter);

APP.listen(3000, () => console.log("Server is running on port 3000"));

export default APP;
