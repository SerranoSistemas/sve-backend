import express, { Request, Response } from "express";
import { Router as Router_Planta } from "./Routes/Planta";
import { Router as EstacaoMedicaoRouter } from "./Routes/EstacaoMedicao";
import { Router as Router_Area } from "./Routes/Area";
import { Router as Router_ServersPIMS } from "./Routes/ServersPIMS";
import { Router as Router_Medicoes } from "./Routes/Medicoes";
import { Router as Router_UnidadesDeMedida } from "./Routes/UnidadesDeMedida";
import { Router as Router_Produto } from "./Routes/Produto";
import { Router as SistemaRoutes } from "./Routes/Sistema";
import { Router as GruposDeRedeRoutes } from "./Routes/GruposDeRede";
import { Router as ConfiguracaoRoutes } from "./Routes/Configuracao";
import { Router as DepositosRoutes } from "./Routes/DepositosSAP";
import { Router as ClientesRoutes } from "./Routes/Clientes";
import { Router as FundoEscalaRoutes } from "./Routes/FundoEscala";

const APP = express();

APP.get("/", (req: Request, res: Response) => res.status(200).json({  mensagem:  "Bem vindo ao Sistema de Medição" }));

APP.use("/planta", Router_Planta);
APP.use("/unidadeDeMedida", Router_UnidadesDeMedida);
APP.use("/medicao", Router_Medicoes);
APP.use("/servers", Router_ServersPIMS);
APP.use("/area", Router_Area);
APP.use("/produto", Router_Produto);
APP.use("/sistema", SistemaRoutes);
APP.use("/estacaoDeMedicao", EstacaoMedicaoRouter);
APP.use("/grupoderede", GruposDeRedeRoutes);
APP.use("/configuracao", ConfiguracaoRoutes);
APP.use("/deposito", DepositosRoutes);
APP.use("/cliente", ClientesRoutes);
APP.use("/fundoEscala", FundoEscalaRoutes);

APP.listen(3000, () => console.log("Server is running on port 3000"));

export default APP;
