import { ProductDescGenerator, TagGenerator } from "../Lib/MockDataGenerator";
import { Medicao } from "./Types";

export const MedicoesArray: Medicao[] = [
  {
    medidor: {
      uuid: "3b6a1d7ad4ec4e22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
    produto: "ETENO FÓSSIL",
    totalizadorPrimarioDigitado: 753494250,
    totalizadorSecundarioDigitado: 688723437,
    possuiMedidorSecundario: false,
    diferenca: -0.12,
    medicaoLiberada: 260688,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
    produto: "PROPENO GP",
    totalizadorPrimarioDigitado: 24936630,
    totalizadorSecundarioDigitado: 0,
    possuiMedidorSecundario: false,
    diferenca: 0.0,
    medicaoLiberada: 1404,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "2827a2e7bd46436f8eda4f903099df31",
      identificador: "210FQI340_1.PV",
    },
    produto: "ETENO RETORNO",
    totalizadorPrimarioDigitado: 0,
    totalizadorSecundarioDigitado: 46260312,
    possuiMedidorSecundario: true,
    diferenca: 0.0,
    medicaoLiberada: 8332,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "3b6a1d7ad4ec4e22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
    produto: "VAPOR DE ALTA",
    totalizadorPrimarioDigitado: 137779468,
    totalizadorSecundarioDigitado: 283935562,
    possuiMedidorSecundario: false,
    diferenca: 0.0,
    medicaoLiberada: 0,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "3b6a1d7ad4ec4e22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
    produto: "ÁGUA DESMINERALIZADA",
    totalizadorPrimarioDigitado: 216537828,
    totalizadorSecundarioDigitado: 0,
    possuiMedidorSecundario: false,
    diferenca: 0.0,
    medicaoLiberada: 73953,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "3b6a1d7ad4ec4e22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
    produto: "ÁGUA CLARIFICADA",
    totalizadorPrimarioDigitado: 2891666750,
    totalizadorSecundarioDigitado: 0,
    possuiMedidorSecundario: true,
    diferenca: 0.0,
    medicaoLiberada: 738250,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
    produto: "ÁGUA POTÁVEL",
    totalizadorPrimarioDigitado: 170246937,
    totalizadorSecundarioDigitado: 0,
    possuiMedidorSecundario: false,
    diferenca: 0.0,
    medicaoLiberada: 54078,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
    produto: "NITROGÊNIO",
    totalizadorPrimarioDigitado: 20285888000,
    totalizadorSecundarioDigitado: 3062000,
    possuiMedidorSecundario: false,
    diferenca: 0.0,
    medicaoLiberada: 0,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
  {
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
    produto: "ETENO VERDE",
    totalizadorPrimarioDigitado: 30015335,
    totalizadorSecundarioDigitado: 173945,
    possuiMedidorSecundario: true,
    diferenca: 0.0,
    medicaoLiberada: 0,
    situacao: Math.random() < 0.5 ? "L" : "P",
    pendenciasMes: Math.random() < 0.5,
  },
];

export const Medicoes = MedicoesArray.map((item) => {
  return {
    ...item,
    // produto: ProductDescGenerator(),
    // medidor: {
    //   uuid: item.medidor.uuid,
    //   identificador: TagGenerator(),
    // },
  };
});
