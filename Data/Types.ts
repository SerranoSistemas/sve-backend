export type PlantaType = {
  id: string;
  codigo: string;
  descricao: string;
};

export type EstacoesMedicaoType = {
  id: string;
  codigo: string;
  descricao: string;
  observacao: string;
};

//Objeto mínimo por enquanto
export type DefaultClass = {
  uuid?: string;
  codigo?: number | string;
  descricao: string;
  identificador: string;
  incluidoEm?: Date | number;
  alteradoEm?: Date | number;
  excluidoEm?: Date | number;
  incluidoPor?: string;
  alteradoPor?: string;
  excluidoPor?: string;
};

//Objeto mínimo por enquanto
export type ServersPIMS = {
  title: number | string;
  odbc: string;
  identificador: string;
  incluidoEm?: Date | number;
  alteradoEm?: Date | number;
  excluidoEm?: Date | number;
};

//Objeto mínimo por enquanto
export type DefaultAreaClass = {
  uuid?: string;
  codigo: number | string;
  descricao: string;
  identificador: string;
  planta: string;
  incluidoEm?: Date | number;
  alteradoEm?: Date | number;
  excluidoEm?: Date | number;
  incluidoPor?: string;
  alteradoPor?: string;
  excluidoPor?: string;
};

//Objeto mínimo por enquanto
export type DefaultProdutoClass = {
  codigo: number | string;
  descricao: string;
  identificador: string;
  unidadeMedida: string;
  incluidoEm?: Date | number;
  alteradoEm?: Date | number;
  excluidoEm?: Date | number;
};

export type Pagination = {
  page: number;
  rows: number;
  orderBy?: string; //Nome da Coluna do JSON
  orderDirection?: string; //'asc' ou 'desc'
};

export type DefaultFilter = {
  text?: string;
  pagination: Pagination;
};

export type PageType = {
  totalRows: number;
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
};

export type ResponseType = {
  data: any;
  page?: PageType;
  sucesso: boolean;
  mensagem?: string;
};

//MEDIDOR
export type Medidor = {
  uuid: string;
  identificador: string;
  tagDeLiberacao?: string;
  descricao?: string;
  limiteDeMedicao?: number;
  limiteDeTotalizacao?: number;
  medidorOficial?: boolean;
  medidorDeParceiro?: boolean; //Indica se é um Medidor Secundário
  medidorParceiro?: string; //UUID
  //UNIDADES DE MEDIDA
  unidadeDeMedidaPims?: string; //UUID
  unidadeDeMedidaSVE?: string; //UUID
  unidadeDeMedidaSAP?: string; //UUID
  //FATOR DE CONVERSÃO
  fatorDeConversaoSAP?: number;
  fatorDeConversaoSVE?: number;
  //Checkbox
  indicadorDeFaturamento?: boolean;
  possuiMultaDeFundoDeEscala?: boolean;
  //Outras relações
  area?: string; //UUID
  produto?: string; //UUID
  estacaoDeMedicao?: string; //UUID
  servidorPims?: string; //UUID
  depositoParaSAP?: number; //UUID
  cliente?: string; //UUID
  //########## ITENS DE RPA ###########
  liberarMedicaoSemAvaliacao?: boolean; //
  limiteDeMedicaoRuido?: number;
  comentarioDeLiberacao?: string;
  executarLeituraNoPims?: boolean;
  executarLiberacaoAutomatica?: boolean;
  dataDeCalibracao?: Date;
  //########## ITENS DE RPA ###########
};

// #################### MEDIÇÂO ######################### //

export type Medicao = {
  medidor: {
    uuid: string;
    identificador: string;
  };
  produto: string;
  totalizadorPrimarioDigitado: number;
  totalizadorSecundarioDigitado: number;
  possuiMedidorSecundario: boolean; //INDICA SE TEM MEDICAO PARCEIRA OU NAO
  diferenca: number;
  medicaoLiberada: number;
  situacao: "L" | "P";
};

//Detalhamentos de Medição
//Receberá um parâmaetro de MM/AAAA
//Função deve gerar e retornar o seguinte:
//Antes do dia '01' adicionar um registro do dia '31' (mes passado) contendo apenas as 6 primeiras propriedades, o restante pode vir 0 ou string vazia ou false
//Começar os valores que vão somando com a contagem do dia 31
export type Detalhamento = {
  uuid: string; //uuid gerado com v4 do uuid
  dia: string; //string do dia 31 do ultimo mes ao ultimo dia do mês atual passado, exemplo: 31, 01, 02, 03, 04.... 31
  totalizadorPrimario: number; //Mesmo valor de 'totalizadorPrimarioDigitado', porém 10% da vezes tem chance de vir (totalizadorPrimarioDigitado - 2%)
  totalizadorSecundario: number; //Mesmo valor de 'totalizadorSecundarioDigitado', porém 10% da vezes tem chance de vir (totalizadorPrimarioDigitado - 2%)
  totalizadorPrimarioDigitado: number; //Começa com aleatório entre 100.000.000,000 e 500.000.000,000 e incrementa cada vez com o valor de 'medicaoPrimarioDigitada'
  totalizadorSecundarioDigitado: number; //Começa com aleatório entre 10.000.000,000 e 100.000.000,000 e incrementa cada vez com o valor de 'medicaoSecundariaDigitada'

  observacao?: string; //20% de Chance de Vir 'Observação Backend' e 80% de vir vazia ''

  medicaoPrimario: number; //Mesmo valor de 'medicaoPrimarioDigitada', porém 15% da vezes tem chance de vir (medicaoPrimarioDigitada - 3%)
  medicaoSecundaria: number; //Mesmo valor de 'medicaoSecundariaDigitada', porém 15% da vezes tem chance de vir (medicaoPrimarioDigitada - 3%)
  medicaoPrimarioDigitada: number; //Começa com aleatório entre 100.000,000 e 200.000,000 e vai incrementando cada vez com valores entre 10.000 e 20.000
  medicaoSecundariaDigitada: number; //Valor de 'medicaoPrimarioDigitada' com acrescimo de 2%

  unidadeDeMedidaPrimaria: string; //String contendo 'T'
  unidadeDeMedidaSecundaria: string; //String contendo 'T'
  unidadeDeMedidaLiberacao: string; //String contendo 'T'

  diferenca: number; //Diferença Percentual entre 'medicaoPrimarioDigitada' e 'medicaoSecundariaDigitada'

  acrescimo: number; //Sempre 0 por enquanto
  desconto: number; //Sempre 0 por enquanto
  medicaoLiberada: number; //Mesmo Valor de 'medicaoSecundariaDigitada' -- Também chamada de (Med. Acordada) na Tabela

  situacao?: "L" | "P"; //60% de chance de vir 'L' e 40% de 'P'
  indicadorDeAfericao: "A" | "M"; //70% de chance de vir 'A' e 40% de 'M'
  status: string; //Trazer string 'Good' por enquanto
  statusGood: boolean; //10% de Chance de vir TRUE, 90% de vir FALSE
  oberservacaoFundoDeEscala: string; //20% de Chance de Vir 'Observação Fundo Escala Backend' e 80% de vir vazia ''
  medidorOficialPrimario: boolean; //SE TRUE coloca oberservacaoFundoDeEscala no medicaoPrimarioDigitada se for FALSE coloca no medicaoSecundariaDigitada
  statusSap: "P" | "I" | "E"; //40% de Chance de Vir 'I', 40% de vir 'I' e 20% de vir 'E'
  multaFundoDeEscala: number; //Se mostrarFundoDeEscala for TRUE, gerar numero aleatorio entre 10,000 e 100,000
  multaFundoDeEscalaMensal: number; //Se mostrarFundoDeEscala for TRUE, gerar numero aleatorio entre 1,000 e 20,000
  mostrarFundoDeEscala: boolean; //TRUE se dia for '10', '20' ou o ultimo dia do Mês
};
