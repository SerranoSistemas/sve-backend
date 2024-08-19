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

export type Detalhamento = {
  uuid: string;
  dia: string;
  totalizadorPrimarioDigitado: number;
  totalizadorSecundarioDigitado: number;
  observacao?: string;
  medicaoPrimarioDigitada: number;
  medicaoSecundariaDigitada: number;
  unidadeDeMedidaPrimaria: string; //Sem Parenteses
  unidadeDeMedidaSecundaria: string; //Sem Parenteses
  diferenca: number;
  //ACUM UNIB CALCULO medicaoPrimarioDigitada + acumuladoPrimarioAnterior
  //ACUM UNIB CALCULO medicaoSecundariaDigitada + acumuladoSecundarioAnterior
  acrescimo: number;
  desconto: number;
  medicaoLiberada: number; //(Med. Acordada) Usar a unidade de Medida
  unidadeDeMedidaLiberacao: string; //Sem Parenteses
  situacao?: "L" | "P";
  indicadorDeAfericao: "A" | "M";
  status: string; //Aparece junto com o totalizadorPrimarioDigitado
  oberservacaoFundoDeEscala: string;
  medidorOficialPrimario: boolean; //SE TRUE coloca oberservacaoFundoDeEscala no medicaoPrimarioDigitada se for FALSE coloca no medicaoSecundariaDigitada //!!
};
