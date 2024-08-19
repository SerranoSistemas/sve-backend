import { v4 as uuid } from "uuid";
import { Detalhamento } from "./Types";

export const DetalhamentoDeMedicao: Detalhamento[] = [
  {
    uuid: uuid(),
    dia: "1",
    totalizadorPrimarioDigitado: 753494250,
    totalizadorSecundarioDigitado: 688723437,
    observacao: "Oberservação Backend",
    medicaoPrimarioDigitada: 753494200,
    medicaoSecundariaDigitada: 688723400,
    unidadeDeMedidaPrimaria: "T",
    unidadeDeMedidaSecundaria: "T",
    diferenca: -0.12,
    acrescimo: 0,
    desconto: 5000,
    medicaoLiberada: 753494250,
    unidadeDeMedidaLiberacao: "T",
    situacao: Math.random() < 0.5 ? "L" : "P",
    indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
    status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
    oberservacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
    medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca oberservacaoFundoDeEscala no medicaoPrimarioDigitada se for FALSE coloca no medicaoSecundariaDigitada
  },
  {
    uuid: uuid(),
    dia: "2",
    totalizadorPrimarioDigitado: 753494250,
    totalizadorSecundarioDigitado: 688723437,
    observacao: "Oberservação Backend 2",
    medicaoPrimarioDigitada: 32232,
    medicaoSecundariaDigitada: 43354545,
    unidadeDeMedidaPrimaria: "T",
    unidadeDeMedidaSecundaria: "T",
    diferenca: 0,
    acrescimo: 0,
    desconto: 3000,
    medicaoLiberada: 45984994,
    unidadeDeMedidaLiberacao: "T",
    situacao: Math.random() < 0.5 ? "L" : "P",
    indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
    status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
    oberservacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
    medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca oberservacaoFundoDeEscala no medicaoPrimarioDigitada se for FALSE coloca no medicaoSecundariaDigitada
  },
  {
    uuid: uuid(),
    dia: "3",
    totalizadorPrimarioDigitado: 753494250,
    totalizadorSecundarioDigitado: 688723437,
    observacao: "Oberservação Backend 3",
    medicaoPrimarioDigitada: 753494200,
    medicaoSecundariaDigitada: 688723400,
    unidadeDeMedidaPrimaria: "T",
    unidadeDeMedidaSecundaria: "T",
    diferenca: 1.5,
    acrescimo: 0,
    desconto: 5000,
    medicaoLiberada: 753494250,
    unidadeDeMedidaLiberacao: "T",
    situacao: Math.random() < 0.5 ? "L" : "P",
    indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
    status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
    oberservacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
    medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca oberservacaoFundoDeEscala no medicaoPrimarioDigitada se for FALSE coloca no medicaoSecundariaDigitada
  },
];
