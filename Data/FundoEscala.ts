import { v4 as uuidv4 } from "uuid";
import { GenerateRandomValue } from "../Lib/Utils";

export type FundoEscala = {
  uuid: string; //UUID
  minMes: number; //INTEGER
  minMesOriginal: number; //INTEGER
  dia: string; //STRING
  multa: number; //FLOAT
  valorMedicao: number; //FLOAT
  situacao: "L" | "P"; //Liberada ou Pendente,
  unidadeDeMedida: string;
};

export const GenerateFundoEscala = (date: Date, previousValueMedicao: number | null): FundoEscala => {
  const uuid = uuidv4();
  const dia = date.getDate().toString();
  const minMes = Math.random() < 0.9 ? 0 : GenerateRandomValue(0, 450);
  const minMesOriginal = Math.random() < 0.9 ? 0 : GenerateRandomValue(0, 450);
  const valorMedicao = previousValueMedicao ? previousValueMedicao + 1812 : GenerateRandomValue(4000, 15000);
  const multa = minMes > 0 ? valorMedicao / minMes : 0; // Calcula a multa apenas se minMes for maior que 0
  const situacao = Math.random() < 0.85 ? "L" : "P";
  const unidadeDeMedida = "Ton";

  //Adicionar minMesOriginal :number

  return {
    uuid,
    minMes,
    minMesOriginal,
    dia,
    multa,
    valorMedicao,
    situacao,
    unidadeDeMedida,
  };
};
