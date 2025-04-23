import { v4 as uuid } from "uuid";
import { Detalhamento } from "./Types"; 

export const DetalhamentoDeMedicao: Detalhamento[] = [
  // {
  //   uuid: uuid(),
  //   dia: "31",
  //   totalizadorPrimarioDigitado: 578031808,
  //   totalizadorSecundarioDigitado: 31945934,
  //   observacao: "",
  //   medicaoPrimariaDigitada: 0,
  //   medicaoSecundariaDigitada: 0,
  //   unidadeDeMedidaPrimaria: "T",
  //   unidadeDeMedidaSecundaria: "T",
  //   diferenca: 0,
  //   acrescimo: 0,
  //   desconto: 0,
  //   medicaoLiberada: 0,
  //   unidadeDeMedidaLiberacao: "",
  //   situacao: Math.random() < 0.5 ? "L" : "P",
  //   indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
  //   status: Math.random() < 0.5 ? "Status" : "",
  //   observacaoFundoDeEscala: "",
  //   medidorOficialPrimario: false,
  // },
  // {
  //   uuid: uuid(),
  //   dia: "1",
  //   totalizadorPrimarioDigitado: 578226560,
  //   totalizadorSecundarioDigitado: 32143700,
  //   observacao: "Oberservação Backend",
  //   medicaoPrimariaDigitada: 194752,
  //   medicaoSecundariaDigitada: 197766,
  //   unidadeDeMedidaPrimaria: "T",
  //   unidadeDeMedidaSecundaria: "T",
  //   diferenca: -0.12,
  //   acrescimo: 0,
  //   desconto: 0,
  //   medicaoLiberada: 197766,
  //   unidadeDeMedidaLiberacao: "T",
  //   situacao: Math.random() < 0.5 ? "L" : "P",
  //   indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
  //   status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
  //   observacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
  //   medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca observacaoFundoDeEscala no medicaoPrimariaDigitada se for FALSE coloca no medicaoSecundariaDigitada
  // },
  // {
  //   uuid: uuid(),
  //   dia: "2",
  //   totalizadorPrimarioDigitado: 578404032,
  //   totalizadorSecundarioDigitado: 32324578,
  //   observacao: "Oberservação Backend 2",
  //   medicaoPrimariaDigitada: 177472,
  //   medicaoSecundariaDigitada: 180878,
  //   unidadeDeMedidaPrimaria: "T",
  //   unidadeDeMedidaSecundaria: "T",
  //   diferenca: 0,
  //   acrescimo: 0,
  //   desconto: 0,
  //   medicaoLiberada: 180878,
  //   unidadeDeMedidaLiberacao: "T",
  //   situacao: Math.random() < 0.5 ? "L" : "P",
  //   indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
  //   status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
  //   observacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
  //   medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca observacaoFundoDeEscala no medicaoPrimariaDigitada se for FALSE coloca no medicaoSecundariaDigitada
  // },
  // {
  //   uuid: uuid(),
  //   dia: "3",
  //   totalizadorPrimarioDigitado: 578588864,
  //   totalizadorSecundarioDigitado: 32512942,
  //   observacao: "Oberservação Backend 3",
  //   medicaoPrimariaDigitada: 184832,
  //   medicaoSecundariaDigitada: 188364,
  //   unidadeDeMedidaPrimaria: "T",
  //   unidadeDeMedidaSecundaria: "T",
  //   diferenca: 1.5,
  //   acrescimo: 0,
  //   desconto: 0,
  //   medicaoLiberada: 188364,
  //   unidadeDeMedidaLiberacao: "T",
  //   situacao: Math.random() < 0.5 ? "L" : "P",
  //   indicadorDeAfericao: Math.random() < 0.5 ? "A" : "M",
  //   status: Math.random() < 0.5 ? "Status" : "", //Aparece junto com o totalizadorPrimarioDigitado
  //   observacaoFundoDeEscala: Math.random() < 0.3 ? "Observação Fundo de Escala" : "",
  //   medidorOficialPrimario: Math.random() < 0.5 ? true : false, //SE TRUE coloca observacaoFundoDeEscala no medicaoPrimariaDigitada se for FALSE coloca no medicaoSecundariaDigitada
  // },
];

const randomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

function gerarNumeroAleatorio(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min;
}

const startDate = new Date("2024-01-01");

export function gerarDetalhamentos(data: string): Detalhamento[] {
  const [mes, ano] = data.split("/");

  const diasNoMes = new Date(parseInt(ano), parseInt(mes), 0).getDate();
  const detalhamentos: Detalhamento[] = [];

  let medicaoPrimariaDigitada = gerarNumeroAleatorio(100_000, 200_000);
  let medicaoSecundariaDigitada = medicaoPrimariaDigitada * 1.02; // 2% acima de medicaoPrimariaDigitada

  // Adicionar o registro do dia 31 do mês anterior
  detalhamentos.push({
    uuid: uuid(),
    dia: "31",
    totalizadorPrimario: medicaoPrimariaDigitada,
    totalizadorSecundario: medicaoSecundariaDigitada,
    totalizadorPrimarioDigitado: medicaoPrimariaDigitada,
    totalizadorSecundarioDigitado: medicaoSecundariaDigitada,
    observacao: "",
    medicaoPrimaria: medicaoPrimariaDigitada,
    medicaoSecundaria: medicaoSecundariaDigitada,
    medicaoPrimariaDigitada: 0,
    medicaoSecundariaDigitada: 0,
    unidadeDeMedidaPrimaria: "T",
    unidadeDeMedidaSecundaria: "T",
    unidadeDeMedidaLiberacao: "T",
    diferenca: 0,
    acrescimo: 0,
    desconto: 0,
    medicaoLiberada: 0,
    situacao: "L",
    indicadorDeAfericao: "A",
    status: "Good",
    statusGood: true,
    observacaoFundoDeEscala: "",
    medidorOficialPrimario: false,
    statusSap: "I",
    multaFundoDeEscala: 0,
    multaFundoDeEscalaMensal: 0,
    mostrarFundoDeEscala: false,
    statusTagLiberacao: "L",
    dataStatusTagLiberacao: "01/01/1970",
    dataRealMedicao: "01/01/1970",
  });

  var TemFundoEscala = Math.random() > 0.6;
  const ValuemedidorOficialPrimario = Math.random() < 0.5;

  // Gerar registros para o mês atual
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const incrementoPrimario = gerarNumeroAleatorio(10_000, 20_000);
    const incrementoSecundario = incrementoPrimario * 1.02;

    medicaoPrimariaDigitada += incrementoPrimario;
    medicaoSecundariaDigitada += incrementoSecundario;

    const date = randomDate(startDate, new Date())

    detalhamentos.push({
      uuid: uuid(),
      dia: dia.toString().padStart(2, "0"),
      totalizadorPrimario: Math.random() < 0.1 ? medicaoPrimariaDigitada * 0.98 : medicaoPrimariaDigitada,
      totalizadorSecundario: Math.random() < 0.1 ? medicaoSecundariaDigitada * 0.98 : medicaoSecundariaDigitada,
      totalizadorPrimarioDigitado: medicaoPrimariaDigitada,
      totalizadorSecundarioDigitado: medicaoSecundariaDigitada,
      observacao: Math.random() < 0.2 ? "Observação Backend" : "",
      medicaoPrimaria: Math.random() < 0.1 ? medicaoPrimariaDigitada * 0.97 : medicaoPrimariaDigitada,
      medicaoSecundaria: Math.random() < 0.1 ? medicaoSecundariaDigitada * 0.97 : medicaoSecundariaDigitada,
      medicaoPrimariaDigitada: medicaoPrimariaDigitada,
      medicaoSecundariaDigitada: medicaoSecundariaDigitada,
      unidadeDeMedidaPrimaria: "T",
      unidadeDeMedidaSecundaria: "T",
      unidadeDeMedidaLiberacao: "T",
      diferenca: ((medicaoSecundariaDigitada - medicaoPrimariaDigitada) / medicaoPrimariaDigitada) * 100,
      acrescimo: 0,
      desconto: 0,
      medicaoLiberada: medicaoSecundariaDigitada,
      situacao: "P",
      indicadorDeAfericao: Math.random() < 0.7 ? "A" : "M",
      status: "Good",
      statusGood: Math.random() > 0.1,
      observacaoFundoDeEscala: Math.random() < 0.4 ? "Observação Fundo Escala Backend" : "",
      medidorOficialPrimario: ValuemedidorOficialPrimario,
      statusSap: "",
      multaFundoDeEscala: TemFundoEscala ? generateRandomNumber(1, 100) : 0,
      multaFundoDeEscalaMensal: dia === diasNoMes && TemFundoEscala ? generateRandomNumber(2, 20) : 0,
      mostrarFundoDeEscala: dia === 10 || dia === 20 || dia === diasNoMes,
      statusTagLiberacao: Math.random() > 0.15 ? "L" : "P", // 'L' é Liberada, qualquer outra coisa não
      dataStatusTagLiberacao: `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano.toString().padStart(2, "0")}`,
      dataRealMedicao: `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano.toString().padStart(2, "0")}`
    });
  }

  return detalhamentos;
}
