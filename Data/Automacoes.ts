import { Clientes } from "./Clientes";
import { Medidores } from "./Medidores";
import { v4 as uuidv4 } from "uuid";
import { Automacao } from "./Types";
import { Produtos } from "./Produto";

export const generateFakeAutomacoes = (): any[] => {
  const randomBool = (): boolean => Math.random() < 0.5;
  const randomFloat = (min: number, max: number, decimals: number = 2): number =>
    parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

  const randomDate = (start: Date, end: Date): string => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const resultsCount = Math.floor(Math.random() * 11) + 40; // Random number between 40 and 50
  const startDate = new Date("2024-01-01");

  return Array.from({ length: resultsCount }, () => {
    const cliente = Clientes[Math.floor(Math.random() * Clientes.length)];
    const produto = Produtos[Math.floor(Math.random() * Produtos.length)];
    const tagSVE = Medidores[Math.floor(Math.random() * Medidores.length)].tagDeLiberacao;
    const tagSVE2 = Medidores[Math.floor(Math.random() * Medidores.length)].tagDeLiberacao;

    const totalizadorSecundario = randomBool()
      ? ""
      : Medidores[Math.floor(Math.random() * Medidores.length)].tagDeLiberacao;
    const comentarios = randomBool() ? "" : "Comentário de Teste";

    const AllowAutomations = cliente.permitirTransferencia && produto.permitirTransferencia;

    return {
      uuid: uuidv4(),

      cliente: {
        uuid: cliente.uuid,
        nome: cliente.descricao,
        permitirTransferencia: cliente.permitirTransferencia,
      },
      produto: {
        uuid: produto.uuid,
        descricao: produto.descricao,
        permitirTransferencia: produto.permitirTransferencia,
      },

      medidor: {
        identificador: tagSVE, // TAG SVE
        toleranciaDeContrato: randomFloat(0, 100),
        toleranciaDesvioPercentual: randomFloat(0, 100),
        dataDeCalibracao: randomDate(startDate, new Date()),
        dataDeFechamento: randomDate(startDate, new Date()),
        liberarMedicaoSemAvaliacao: AllowAutomations ? Math.random() < 0.8 : false,
        limiteDeMedicaoRuido: randomFloat(0, 10),
        medicaoPrimariaOuSecundariaLiberacao: randomBool() ? "S" : "P",
        comentarioDeLiberacao: randomBool() ? "" : "Comentário de Teste",
        executarLiberacaoAutomatica: AllowAutomations ? Math.random() < 0.8 : false,
        executarTransferenciaEntreCentros: AllowAutomations ? Math.random() < 0.8 : false,
        medidorOficialPrimario: randomBool(),
        medidorParceiro: {
          identificador: tagSVE2,
        },
      },
    };
  });
};
