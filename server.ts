import cors from "cors";
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
import { Router as MedicaoRoutes } from "./Routes/Medicao";
import { Router as MedidorRoutes } from "./Routes/Medidor";
import { Router as AutomacaoPimsRoutes } from "./Routes/AutomacaoPims";
import { Router as EvidenciasRoutes } from "./Routes/Evidencias";
import { Router as PermissaoRoutes } from "./Routes/Permissao";
import { Router as ProdutoPorClienteRoutes } from "./Routes/ProdutoPorCliente";
import { Router as EstornoRoutes } from "./Routes/Estorno";
import { Router as TransferenciasRoutes } from "./Routes/Transferencias";
import { Router as OrdensDeVendaRoutes } from "./Routes/OrdensDeVenda";
import { Middleware } from "./Lib/Utils";

const PORT = process.env.PORT || 3000;

const APP = express();

// Aplicando middlewares globais
APP.use(express.json());
APP.use(Middleware);
APP.use(cors());

APP.get("/", (req: Request, res: Response) => res.status(200).json({ mensagem: "Bem vindo ao Sistema de Medição" }));

//Cadastros
APP.use("/planta", Router_Planta);
APP.use("/unidadeDeMedida", Router_UnidadesDeMedida);
APP.use("/medicao", Router_Medicoes);
APP.use("/servidorPims", Router_ServersPIMS);
APP.use("/area", Router_Area);
APP.use("/produto", Router_Produto);
APP.use("/estacaoDeMedicao", EstacaoMedicaoRouter);
APP.use("/deposito", DepositosRoutes);
APP.use("/cliente", ClientesRoutes);
APP.use("/medidor", MedidorRoutes);

//Movimentação
APP.use("/fundodeescala", FundoEscalaRoutes);
APP.use("/medicao", MedicaoRoutes);
APP.use("/automacao-pims", AutomacaoPimsRoutes);

//Geral
APP.use("/sistema", SistemaRoutes);
APP.use("/grupoderede", GruposDeRedeRoutes);
APP.use("/configuracao", ConfiguracaoRoutes);
APP.use("/evidencias", EvidenciasRoutes);
APP.use("/permissao", PermissaoRoutes);

//SAP
APP.use("/produtoPorCliente", ProdutoPorClienteRoutes);
APP.use("/estorno", EstornoRoutes);
APP.use("/transferencias", TransferenciasRoutes);
APP.use("/ordensDeVenda", OrdensDeVendaRoutes);

APP.use((req: Request, res: Response, next: Function) => {
  res.status(404).send("Rota não encontrada");
});

APP.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default APP;
