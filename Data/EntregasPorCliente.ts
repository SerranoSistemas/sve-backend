import { Clientes as ClientesDb } from "./Clientes";
import { Produtos as ProdutosDb } from "./Produto";
import { parse, differenceInDays, addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Função para converter string em Date
function parseDate(dateString: string): Date {
  return parse(dateString, "dd/MM/yyyy", new Date(), { locale: ptBR });
}

export const GerarRelatorioComparativo = (dataInicialParam, dataFinalParam, clienteParam, produtoParam) => {
  //Filtros que serão fornecidos para a função
  //   const DataInicialSelecionada = "01/11/2024";
  //   const DataFinalSelecionada = "30/11/2024";
  //   const ClienteSelecionado = "b2853ba08a1c4823a9ddb163ad2ca2b3";
  //   const ProdutosSelecionados = ["f48517e2c417495399dd2fed76164d8a", "c446888fb2464b1cbee02befa8d1d168"]; 
  const DataInicialSelecionada = dataInicialParam;
  const DataFinalSelecionada = dataFinalParam;
  const ClienteSelecionado = clienteParam;
  const ProdutosSelecionados = produtoParam;

  //Valores para retorno
  const Cliente = ClientesDb.find((item) => item.uuid === ClienteSelecionado);
  const Produtos = ProdutosDb.filter((item) => ProdutosSelecionados.includes(item.uuid));

  // Converter as strings em objetos Date
  const dataInicial = parseDate(DataInicialSelecionada);
  const dataFinal = parseDate(DataFinalSelecionada);

  // Calcular diferença em dias
  const diasDeDiferenca = differenceInDays(dataFinal, dataInicial);

  // Gerar array de strings com as datas
  const arrayDeDias: string[] = Array.from({ length: diasDeDiferenca + 1 }, (_, i) =>
    format(addDays(dataInicial, i), "dd/MM/yyyy")
  );

  const Agrupadores = Produtos.map((item) => item.descricao);

  const Dados = arrayDeDias.map((Dia) => {
    return {
      data: Dia,
      dados: [
        Agrupadores.map((item) => {
          return [99.99, 99.99, 99.99];
        }),
      ],
    };
  });

  return {
    colunas: ["TotalizadorPrimario", "TotalizadorSecundario", "Media"],
    agrupadores: Agrupadores,
    dados: Dados,
  };
};
