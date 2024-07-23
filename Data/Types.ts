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
  success: boolean;
  message?: string;
};

export type Totalizadores = {
  Dia: 1;
  TotalPrimario: number;
  TotalSecundario: number;
  DataHoraMedicao?: Date;
  DataRealMedicao?: Date;
  Desconto?: number;
  TotalizadorPrimario?: number;
  TotalizadorPrimarioDigitado?: number;
  TotalizadorSecundario?: number;
  TotalizadorSecundarioDigitado?: number;
  MedicaoAcordada?: string;
  MedicaoPrimario?: number;
  MedicaoPrimariaDigitada?: number;
  MedicaoSecundaria?: number;
  MedicaoSecundariaDigitada?: number;
  MedicaoLiberada?: number;
  Observacao?: string;
  Situacao?: string;
  PercentualAcumulado?: number;
  Acrescimo: number;
  Diferenca: number;
  IndicativoDeAfericao: "A" | "M";
  Status: string;
};
