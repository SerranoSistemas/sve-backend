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
import { Router as ArquivoRoutes } from "./Routes/Arquivo";
import { Router as GruposDeRedeRoutes } from "./Routes/GruposDeRede";
import { Router as ConfiguracaoRoutes } from "./Routes/Configuracao";
import { Router as DepositosRoutes } from "./Routes/DepositosSAP";
import { Router as ClientesRoutes } from "./Routes/Clientes";
import { Router as FundoEscalaRoutes } from "./Routes/FundoEscala";
import { Router as MedicaoRoutes } from "./Routes/Medicao";
import { Router as MedidorRoutes } from "./Routes/Medidor";
import { Router as EnergiaRouter } from "./Routes/Energia";
import { Router as AutomacaoPimsRoutes } from "./Routes/AutomacaoPims";
import { Router as AutomacoesRoutes } from "./Routes/Automacoes";
import { Router as EvidenciasRoutes } from "./Routes/Evidencias";
import { Router as PermissaoRoutes } from "./Routes/Permissao";
import { Router as ProdutoPorClienteRoutes } from "./Routes/ProdutoPorCliente";
import { Router as EstornoRoutes } from "./Routes/Estorno";
import { Router as TransferenciasRoutes } from "./Routes/Transferencias";
import { Router as OrdensDeVendaRoutes } from "./Routes/OrdensDeVenda";
import { Router as RelatoriosRoutes } from "./Routes/Relatorios";
import { Middleware } from "./Lib/Utils";
import { GerarRelatorioComparativo } from "./Data/RelatorioComparativo";

const PORT = process.env.PORT || 3000;

const app = express();

// Aplicando middlewares globais
app.use(express.json());
app.use(Middleware);
app.use(cors());

app.get("/", (req: Request, res: Response) => res.status(200).json({ mensagem: "Bem vindo ao Sistema de Medição" }));

//Cadastros
app.use("/planta", Router_Planta);
app.use("/unidadeDeMedida", Router_UnidadesDeMedida);
app.use("/medicao", Router_Medicoes);
app.use("/servidorPims", Router_ServersPIMS);
app.use("/area", Router_Area);
app.use("/produto", Router_Produto);
app.use("/estacaoDeMedicao", EstacaoMedicaoRouter);
app.use("/deposito", DepositosRoutes);
app.use("/cliente", ClientesRoutes);
app.use("/medidor", MedidorRoutes);

//Movimentação
app.use("/fundodeescala", FundoEscalaRoutes);
app.use("/medicao", MedicaoRoutes);
app.use("/automacao-pims", AutomacaoPimsRoutes);
app.use("/automacoes", AutomacoesRoutes);
app.use("/energia", EnergiaRouter);

//Geral
app.use("/sistema", SistemaRoutes);
app.use("/arquivo", ArquivoRoutes);
app.use("/grupoderede", GruposDeRedeRoutes);
app.use("/configuracao", ConfiguracaoRoutes);
app.use("/evidencia", EvidenciasRoutes);
app.use("/permissao", PermissaoRoutes);

//SAP
app.use("/produtoPorCliente", ProdutoPorClienteRoutes);
app.use("/estorno", EstornoRoutes);
app.use("/transferencia", TransferenciasRoutes);
app.use("/ordemDeVenda", OrdensDeVendaRoutes);

//relatorios
app.use("/relatorio", RelatoriosRoutes);

app.use((req: Request, res: Response, next: Function) => {
  res.status(404).send("Rota não encontrada");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;
