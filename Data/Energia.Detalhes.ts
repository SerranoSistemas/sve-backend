import { v4 as uuid } from "uuid";

export const DetalhamentoDeMedicao = [];

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

const startDate = new Date("2024-01-01");

export function gerarEnergiaDetalhamentos(data: string) {
  const [mes, ano] = data.split("/");

  const diasNoMes = new Date(parseInt(ano), parseInt(mes), 0).getDate();
  const detalhamentos = [];

  let valorPrimario = gerarNumeroAleatorio(100_000, 200_000);
  let valorSecundario = valorPrimario * 1.02; // 2% acima de valorPrimario

  // Gerar registros para o mês atual
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const incrementoPrimario = gerarNumeroAleatorio(10_000, 20_000);
    const incrementoSecundario = incrementoPrimario * 1.02;

    valorPrimario += incrementoPrimario;
    valorSecundario += incrementoSecundario;

    const date = randomDate(startDate, new Date());

    detalhamentos.push({
      uuid: uuid(),
      status: "Good",
      dataRealMedicao: `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano
        .toString()
        .padStart(2, "0")}`,
      dia: dia.toString().padStart(2, "0"),

      totalizadorEnergiaAtiva1Original: Math.random() < 0.1 ? valorPrimario * 0.98 : valorPrimario,
      totalizadorEnergiaAtiva1Digitada: valorPrimario,

      totalizadorEnergiaReativa1Original: Math.random() < 0.1 ? valorPrimario * 0.98 : valorPrimario,
      totalizadorEnergiaReativa1Digitada: valorPrimario,

      totalizadorEnergiaAtiva2Original: Math.random() < 0.1 ? valorSecundario * 0.98 : valorSecundario,
      totalizadorEnergiaAtiva2Digitada: valorSecundario,

      totalizadorEnergiaReativa2Original: Math.random() < 0.1 ? valorSecundario * 0.98 : valorSecundario,
      totalizadorEnergiaReativa2Digitada: valorSecundario,

      medicaoLiberadaAtiva: valorPrimario,
      medicaoLiberadaReativa: valorSecundario,

      fatorDePotencia: valorPrimario * 0.67,

      observacao: "",

      statusTagLiberacao: Math.random() > 0.15 ? "L" : "P", // 'L' é Liberada, qualquer outra coisa não
      dataStatusTagLiberacao: `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano
        .toString()
        .padStart(2, "0")}`,
    });
  }

  return detalhamentos;
}
