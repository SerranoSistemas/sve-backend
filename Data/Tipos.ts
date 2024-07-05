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
  incluidoEm: Date | number; //No front de preferencia timestamp
  alteradoEm: Date | number; //No front de preferencia timestamp
  excluidoEm?: Date | number; //No front de preferencia timestamp
};

export type Pagination = {
  page: number; //Pagina que eu se quer 
  rows: number; //Linhas por Página que se quer
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


