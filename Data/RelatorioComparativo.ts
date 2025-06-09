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
  const Agrupadores = Produtos.map((item) => `${item.descricao} - Teste.pv`);

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
      soma: 999,
      dados: Agrupadores.map((_, index) => {
        return [2999999.999, index, 999.999, 0, (index + 1) * 100, 999.999, 0, (index + 1) * 100, index % 2 === 0, 999.999];
      }),
    };
  });

  // Agrupadores.push('Valor')

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
      "medidorOficialPrimario",
      "medicaoOficial",
    ],
    agrupadores: Agrupadores,
    dados: Dados,
  };
};
