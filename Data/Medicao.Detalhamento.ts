import { Detalhamento } from "./Types";

export const DetalhamentoDeMedicao: Detalhamento[] = [
  {
    dia: 1,
    totalPrimario: 753494250,
    totalSecundario: 688723437,
    dataHoraMedicao: new Date("2024-08-01T10:00:00Z"),
    dataRealMedicao: new Date("2024-08-01T11:00:00Z"),
    desconto: 5000,
    totalizadorPrimario: 753494250,
    totalizadorPrimarioDigitado: 753494200,
    totalizadorSecundario: 688723437,
    totalizadorSecundarioDigitado: 688723400,
    medicaoAcordada: 260688,
    medicaoPrimario: 753494250,
    medicaoPrimariaDigitada: 753494200,
    medicaoSecundaria: 688723437,
    medicaoSecundariaDigitada: 688723400,
    medicaoLiberada: 753494250,
    observacao: "Oberservação Backend",
    situacao: "L",
    percentualAcumulado: 0.12,
    acrescimo: 0,
    diferenca: -0.12,
    indicativoDeAfericao: "A",
    status: "Liberada",
  },
  {
    dia: 2,
    totalPrimario: 24936630,
    totalSecundario: 0,
    dataHoraMedicao: new Date("2024-08-02T10:00:00Z"),
    dataRealMedicao: new Date("2024-08-02T11:00:00Z"),
    desconto: 200,
    totalizadorPrimario: 24936630,
    totalizadorPrimarioDigitado: 24936600,
    totalizadorSecundario: 0,
    totalizadorSecundarioDigitado: 0,
    medicaoAcordada: 1404,
    medicaoPrimario: 24936630,
    medicaoPrimariaDigitada: 24936600,
    medicaoSecundaria: 0,
    medicaoSecundariaDigitada: 0,
    medicaoLiberada: 24936630,
    observacao: "Oberservação Backend 1",
    situacao: "L",
    percentualAcumulado: 0,
    acrescimo: 0,
    diferenca: 0,
    indicativoDeAfericao: "M",
    status: "Liberada",
  },
  {
    dia: 3,
    totalPrimario: 0,
    totalSecundario: 46260312,
    dataHoraMedicao: new Date("2024-08-03T10:00:00Z"),
    dataRealMedicao: new Date("2024-08-03T11:00:00Z"),
    desconto: 300,
    totalizadorPrimario: 0,
    totalizadorPrimarioDigitado: 0,
    totalizadorSecundario: 46260312,
    totalizadorSecundarioDigitado: 46260000,
    medicaoAcordada: 828172,
    medicaoPrimario: 0,
    medicaoPrimariaDigitada: 0,
    medicaoSecundaria: 46260312,
    medicaoSecundariaDigitada: 46260000,
    medicaoLiberada: 46260312,
    observacao: "Oberservação Backend 2",
    situacao: "L",
    percentualAcumulado: 0,
    acrescimo: 0,
    diferenca: 0,
    indicativoDeAfericao: "A",
    status: "Liberada",
  },
];