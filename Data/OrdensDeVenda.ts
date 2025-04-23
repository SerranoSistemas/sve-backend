import { v4 as uuid } from "uuid";
import {
  ClientNameGenerator,
  DemonstrativoGenerator,
  ProductDescGenerator,
  TagGenerator,
} from "../Lib/MockDataGenerator";

type OrdemDeVenda = {
  uuid: string;
  tag: string;
  demonstrativo: number;
  cliente: string;
  produto: string;
  contrato: string;
  deposito: string;
  quantidadeTransferida: number;
  diferencaParaConferencia?: number;
  desconto: number;
  data: string;
  parcial: number;
  status: string;
  statusErro?: string;
  observacoes: string;
};

export type NewOrdemDeVenda = {
  codigoExportacao: string; //antigo uuid
  demonstrativo: number; //Manter igual
  contrato: string; //Manter igual
  medidor: {
    identificador: string; //antiga 'tag'
  };
  cliente: {
    nome: string; //Antigo 'cliente'
  };
  produto: {
    descricao: string; //Antigo 'produto'
  };
  depositoDeDestino: {
    identificador: string; //Antigo 'deposito'
  };
  quantidadeConsumida: number; //Adicionar
  quantidadeTransferida: number; //Manter igual
  diferencaParaConferencia: number; //Valor de Totalização={diferencaParaConferencia} 3
  desconto: number; //Manter igual
  dataDeMovimento: string; //Antiga 'data'
  statusSap: string; //Antigo 'status'
  statusErro: string; //Manter igual
};

export const GenerateOrdensDeVenda = () => {
  const OrdensDeVenda: OrdemDeVenda[] = [
    {
      uuid: uuid(),
      tag: "505FQ01_1.PV",
      demonstrativo: 250148,
      cliente: "INNOVA - Videolar",
      produto: "ETENO FÓSSIL",
      contrato: "40000955",
      deposito: "SCOM",
      quantidadeTransferida: 445500,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "505FQ05_1.PV",
      demonstrativo: 250149,
      cliente: "INNOVA - Videolar",
      produto: "BENZENO",
      contrato: "40000954",
      deposito: "SCOM",
      quantidadeTransferida: 957125,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "506FQ04_1.PV",
      demonstrativo: 250150,
      cliente: "ARLANXEO TSR (ELAST)",
      produto: "BUTADIENO",
      contrato: "40000275",
      deposito: "SCOM",
      quantidadeTransferida: 1301609,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "514FQ01_1.PV",
      demonstrativo: 250151,
      cliente: "ARLANXEO HPE (DSM)",
      produto: "ETENO FÓSSIL",
      contrato: "40002259",
      deposito: "SCOM",
      quantidadeTransferida: 584469,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "514FQ02_1.PV",
      demonstrativo: 250152,
      cliente: "ARLANXEO HPE (DSM)",
      produto: "PROPENO GP",
      contrato: "40002228",
      deposito: "SCOM",
      quantidadeTransferida: 67.969,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "210FQI005B_1.PV",
      demonstrativo: 250153,
      cliente: "UNIB 2 RS OV",
      produto: "VAPOR DE BAIXA",
      contrato: "SCOM",
      deposito: "SCOM",
      quantidadeTransferida: 50391,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "211FQI340_1.PV",
      demonstrativo: 250154,
      cliente: "UNIB 2 RS OV",
      produto: "CONDENSADO DE VAPOR",
      contrato: "SCOM",
      deposito: "SCOM",
      quantidadeTransferida: 934468,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "212FQI035_013.PV",
      demonstrativo: 250155,
      cliente: "UNIB 2 RS OV",
      produto: "EVRES",
      contrato: "SCOM",
      deposito: "SCOM",
      quantidadeTransferida: 0,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "502FQ028_1.PV",
      demonstrativo: 250160,
      cliente: "BRASKEM PE4 OV",
      produto: "ETENO VERDE",
      contrato: "IPSP",
      deposito: "IPSP",
      quantidadeTransferida: 69264,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "507FQ01_V1.PV",
      demonstrativo: 250272,
      cliente: "BRASKEM PP2/PE5 OV",
      produto: "ETENO VERDE",
      contrato: "IPSL",
      deposito: "IPSL",
      quantidadeTransferida: 2664000,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "19/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "505FQ01_1.PV",
      demonstrativo: 250273,
      cliente: "INNOVA - Videolar",
      produto: "ETENO FÓSSIL",
      contrato: "40000955",
      deposito: "SCOM",
      quantidadeTransferida: 344562,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "505FQ05_1.PV",
      demonstrativo: 250274,
      cliente: "INNOVA - Videolar",
      produto: "BENZENO",
      contrato: "40000954",
      deposito: "SCOM",
      quantidadeTransferida: 365875,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "506FQ04_1.PV",
      demonstrativo: 250275,
      cliente: "ARLANXEO TSR (ELAST)",
      produto: "BUTADIENO",
      contrato: "40000275",
      deposito: "SCOM",
      quantidadeTransferida: 1301609,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "514FQ01_1.PV",
      demonstrativo: 250276,
      cliente: "ARLANXEO HPE (DSM)",
      produto: "ETENO FÓSSIL",
      contrato: "40002259",
      deposito: "SCOM",
      quantidadeTransferida: 584469,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "514FQ02_1.PV",
      demonstrativo: 250277,
      cliente: "ARLANXEO HPE (DSM)",
      produto: "PROPENO GP",
      contrato: "40002228",
      deposito: "SCOM",
      quantidadeTransferida: 67969,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
    {
      uuid: uuid(),
      tag: "210FQI005B_1.PV",
      demonstrativo: 250280,
      cliente: "UNIB 2 RS OV",
      produto: "VAPOR DE BAIXA",
      contrato: "SCOM",
      deposito: "SCOM",
      quantidadeTransferida: 50545,
      diferencaParaConferencia: Math.random() > 0.9 ? Math.random() * 1000 : 0,
      desconto: 0,
      data: "20/08/2024",
      parcial: 0,
      status: Math.random() > 0.7 ? "Enviado com Sucesso!" : "",
      statusErro: Math.random() > 0.85 ? "Mensagem de Erro" : "",
      observacoes: Math.random() > 0.55 ? "Observações do backend" : "",
    },
  ];

  return OrdensDeVenda.map((ordem) => ({
    codigoExportacao: ordem.uuid,
    demonstrativo: DemonstrativoGenerator(),
    contrato: ordem.contrato,
    medidor: {
      identificador: TagGenerator(),
    },
    cliente: {
      nome: ClientNameGenerator(),
    },
    produto: {
      descricao: ProductDescGenerator(),
    },
    depositoDeDestino: {
      identificador: ordem.deposito,
    },
    quantidadeConsumida: Math.floor(Math.random() * (ordem.quantidadeTransferida / 2)), // Exemplo de quantidade consumida gerada aleatoriamente
    quantidadeTransferida: ordem.quantidadeTransferida,
    diferencaParaConferencia: ordem.diferencaParaConferencia || 0,
    desconto: ordem.desconto,
    dataDeMovimento: ordem.data,
    statusSap: ordem.status === "Enviado com Sucesso!" ? "S" : "A",
    mensagemSap: ordem.status,
    statusErro: ordem.statusErro || "",
    observacoes: ordem.observacoes,
  }));
};
