import { v4 as uuid } from "uuid";

type OrdemDeVenda = {
  uuid: string;
  tag: string;
  demonstrativo: number;
  cliente: string;
  produto: string;
  contrato: string;
  deposito: string;
  quantidadeConsumida: number;
  desconto: number;
  data: string;
  parcial: number;
  status: string;
};

export const OrdensDeVenda: OrdemDeVenda[] = [
  {
    uuid: uuid(),
    tag: "505FQ01_1.PV",
    demonstrativo: 250148,
    cliente: "INNOVA - Videolar",
    produto: "ETENO FÓSSIL",
    contrato: "40000955",
    deposito: "SCOM",
    quantidadeConsumida: 445500,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "505FQ05_1.PV",
    demonstrativo: 250149,
    cliente: "INNOVA - Videolar",
    produto: "BENZENO",
    contrato: "40000954",
    deposito: "SCOM",
    quantidadeConsumida: 957125,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "506FQ04_1.PV",
    demonstrativo: 250150,
    cliente: "ARLANXEO TSR (ELAST)",
    produto: "BUTADIENO",
    contrato: "40000275",
    deposito: "SCOM",
    quantidadeConsumida: 1301609,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "514FQ01_1.PV",
    demonstrativo: 250151,
    cliente: "ARLANXEO HPE (DSM)",
    produto: "ETENO FÓSSIL",
    contrato: "40002259",
    deposito: "SCOM",
    quantidadeConsumida: 584469,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "514FQ02_1.PV",
    demonstrativo: 250152,
    cliente: "ARLANXEO HPE (DSM)",
    produto: "PROPENO GP",
    contrato: "40002228",
    deposito: "SCOM",
    quantidadeConsumida: 67.969,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "210FQI005B_1.PV",
    demonstrativo: 250153,
    cliente: "UNIB 2 RS OV",
    produto: "VAPOR DE BAIXA",
    contrato: "SCOM",
    deposito: "SCOM",
    quantidadeConsumida: 50391,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "211FQI340_1.PV",
    demonstrativo: 250154,
    cliente: "UNIB 2 RS OV",
    produto: "CONDENSADO DE VAPOR",
    contrato: "SCOM",
    deposito: "SCOM",
    quantidadeConsumida: 934468,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "",
  },
  {
    uuid: uuid(),
    tag: "212FQI035_013.PV",
    demonstrativo: 250155,
    cliente: "UNIB 2 RS OV",
    produto: "EVRES",
    contrato: "SCOM",
    deposito: "SCOM",
    quantidadeConsumida: 0,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "",
  },
  {
    uuid: uuid(),
    tag: "502FQ028_1.PV",
    demonstrativo: 250160,
    cliente: "BRASKEM PE4 OV",
    produto: "ETENO VERDE",
    contrato: "IPSP",
    deposito: "IPSP",
    quantidadeConsumida: 69264,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "",
  },
  {
    uuid: uuid(),
    tag: "507FQ01_V1.PV",
    demonstrativo: 250272,
    cliente: "BRASKEM PP2/PE5 OV",
    produto: "ETENO VERDE",
    contrato: "IPSL",
    deposito: "IPSL",
    quantidadeConsumida: 2664000,
    desconto: 0,
    data: "19/08/2024",
    parcial: 0,
    status: "",
  },
  {
    uuid: uuid(),
    tag: "505FQ01_1.PV",
    demonstrativo: 250273,
    cliente: "INNOVA - Videolar",
    produto: "ETENO FÓSSIL",
    contrato: "40000955",
    deposito: "SCOM",
    quantidadeConsumida: 344562,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "505FQ05_1.PV",
    demonstrativo: 250274,
    cliente: "INNOVA - Videolar",
    produto: "BENZENO",
    contrato: "40000954",
    deposito: "SCOM",
    quantidadeConsumida: 365875,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "506FQ04_1.PV",
    demonstrativo: 250275,
    cliente: "ARLANXEO TSR (ELAST)",
    produto: "BUTADIENO",
    contrato: "40000275",
    deposito: "SCOM",
    quantidadeConsumida: 1301609,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "514FQ01_1.PV",
    demonstrativo: 250276,
    cliente: "ARLANXEO HPE (DSM)",
    produto: "ETENO FÓSSIL",
    contrato: "40002259",
    deposito: "SCOM",
    quantidadeConsumida: 584469,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "514FQ02_1.PV",
    demonstrativo: 250277,
    cliente: "ARLANXEO HPE (DSM)",
    produto: "PROPENO GP",
    contrato: "40002228",
    deposito: "SCOM",
    quantidadeConsumida: 67969,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
  {
    uuid: uuid(),
    tag: "210FQI005B_1.PV",
    demonstrativo: 250280,
    cliente: "UNIB 2 RS OV",
    produto: "VAPOR DE BAIXA",
    contrato: "SCOM",
    deposito: "SCOM",
    quantidadeConsumida: 50545,
    desconto: 0,
    data: "20/08/2024",
    parcial: 0,
    status: "Enviado com Sucesso!",
  },
];
