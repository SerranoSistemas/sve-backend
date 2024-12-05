import {
  AdicionarSubtotaisEntreMeses,
  AdicionaTotal,
  GerarArrayDeDatas,
  parseDate,
  RemoverDatas,
} from "../Lib/Utils.Relatorios";
import { Produtos as ProdutosDb } from "./Produto";
import { differenceInDays } from "date-fns";

export const GerarRelatorioComparativo = (
  dataInicialParam,
  dataFinalParam,
  clienteParam,
  produtoParam,
  DiaADiaParam,
  SubtotaisParam,
  TotaisParam
) => {
  const DataInicialSelecionada = dataInicialParam; //Data no fomato 'DD/MM/AAAA'
  const DataFinalSelecionada = dataFinalParam; //Data no fomato 'DD/MM/AAAA'
  const ProdutosSelecionados = produtoParam; // string ou array de strings contendo uuid dos produtos

  const DataInicial = parseDate(DataInicialSelecionada);
  const DataFinal = parseDate(DataFinalSelecionada);
  const DiasDiferenca = differenceInDays(DataFinal, DataInicial);

  const Produtos = ProdutosDb.filter((item) => ProdutosSelecionados.includes(item.uuid));
  const Agrupadores = Produtos.map((item) => item.descricao);

  var ArrayDeDatas = GerarArrayDeDatas(DataInicial, DiasDiferenca);

  if (SubtotaisParam) {
    ArrayDeDatas = AdicionarSubtotaisEntreMeses(ArrayDeDatas);
  }

  if (TotaisParam) {
    ArrayDeDatas = AdicionaTotal(ArrayDeDatas);
  }

  if (DiaADiaParam === false) {
    ArrayDeDatas = RemoverDatas(ArrayDeDatas);
  }

  const Dados = ArrayDeDatas.map((Dia) => {
    return {
      data: Dia,
      dados: [
        Agrupadores.map(() => {
          return [2999999.999, 0, 999.999, 0, 100, 999.999, 0, 100];
        }),
      ],
    };
  });

  return {
    colunas: [
      "TotalUnib",
      "TotalParceiro",
      "MedUnib",
      "MedParceiro",
      "DifPercent",
      "AcumUnib",
      "AcumParceiro",
      "DifAcum",
    ],
    agrupadores: Agrupadores,
    dados: Dados,
  };
};
