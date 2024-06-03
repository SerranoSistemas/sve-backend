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
  codigo: number | string;
  descricao: string;
  identificador: string;
  incluidoEm: Date | number;
  alteradoEm: Date | number;
  excluidoEm?: Date | number;
};

//Objeto mínimo por enquanto
export type DefaultAreaClass = {
  codigo: number | string;
  descricao: string;
  identificador: string;
  planta: string;
  incluidoEm: Date | number;
  alteradoEm: Date | number;
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
};

export type ResponseType = {
  data: any;
  page?: PageType;
  success: boolean;
  message?: string;
};
