import { parse, differenceInDays, addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function AdicionarSubtotaisEntreMeses(dates: string[]) {
  const result = [];
  let lastMonth = null;

  dates.forEach((date) => {
    const [_, month, year] = date.split("/"); // Divide a data no formato DD/MM/AAAA
    const currentMonth = `${month}/${year}`; // Formata o mês e ano para comparação

    // Se o mês mudou e não é a primeira data, insira 'Subtotal'
    if (lastMonth && currentMonth !== lastMonth) {
      result.push("Subtotal " + lastMonth);
    }

    result.push(date);
    lastMonth = currentMonth;
  });

  return result;
}

export function AdicionaTotal(dates: string[]) {
  return [...dates, "Total período"];
}

export function GerarArrayDeDatas(DataInicial, DiasDiferenca) {
  // Gerar array de strings com as datas
  var ArrayDeDatas: string[] = Array.from({ length: DiasDiferenca + 1 }, (_, i) => {
    var data = format(addDays(DataInicial, i), "dd/MM/yyyy");
    return data;
  });

  return ArrayDeDatas;
}

// Função para converter string em Date
export function parseDate(dateString: string): Date {
  return parse(dateString, "dd/MM/yyyy", new Date(), { locale: ptBR });
}

export function RemoverDatas(dates: string[]) {
  return dates.filter((date) => date.includes("Total") || date.includes("Sub"));
}
