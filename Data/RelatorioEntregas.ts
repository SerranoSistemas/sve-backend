import {
  AdicionarSubtotaisEntreMeses,
  AdicionaTotal,
  GerarArrayDeDatas,
  parseDate,
  RemoverDatas,
} from "../Lib/Utils.Relatorios";
import { Produtos as ProdutosDb } from "./Produto";
import { Clientes as ClientesDb } from "./Clientes";
import { differenceInDays } from "date-fns";

export const GerarRelatorioEntregas = (
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
  const ClientesSelecionados = clienteParam; // string ou array de strings contendo uuid dos clientes
  const ProdutosSelecionados = produtoParam; // string ou array de strings contendo uuid dos produtos

  const DataInicial = parseDate(DataInicialSelecionada);
  const DataFinal = parseDate(DataFinalSelecionada);
  const DiasDiferenca = differenceInDays(DataFinal, DataInicial);

  const Produtos = ProdutosDb.filter((item) => ProdutosSelecionados.includes(item.uuid));
  const Clientes = ClientesDb.filter((item) => ClientesSelecionados.includes(item.uuid));
  const Agrupadores = Produtos.map((item) => item.descricao);
  const Colunas = Clientes.map((item) => item.descricao);

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
        const i = index + 1;
        return [i, i * 10, i * 100, i * 1000, i * 1000, i * 1000, i * 1000, i * 1000, i * 1000, i * 1000, i * 1000];
      }),
    };
  });

  return {
    colunas: Colunas,
    agrupadores: Agrupadores,
    dados: Dados,
  };
};
