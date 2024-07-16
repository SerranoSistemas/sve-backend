import express, { Request, Response } from "express";

import Router_Planta from "./Routes/Planta";
import EstacaoMedicaoRouter from "./Routes/EstacaoMedicao";
import Router_Area from "./Routes/Area";
import LocalesRouter from "./Routes/Locales";
import Router_ServersPIMS from "./Routes/ServersPIMS";
import Router_Medicoes from "./Routes/Medicoes";
import Router_UnidadesDeMedida from "./Routes/UnidadesDeMedida";

const APP = express();

APP.get("/", (req: Request, res: Response) => res.status(200).json({ message: "Bem vindo ao Sistema de Medição" }));

APP.use("/planta", Router_Planta);
APP.use("/unidadeMedida", Router_UnidadesDeMedida);
APP.use("/medicao", Router_Medicoes);
APP.use("/servers", Router_ServersPIMS);
APP.use("/area", Router_Area);
APP.use("/estacaoMedicao", EstacaoMedicaoRouter);
APP.use("/locales", LocalesRouter);

APP.listen(3000, () => console.log("Server is running on port 3000"));

export default APP;
