import moment from "moment";
import { DefaultAreaClass } from "./Types";

export const Areas: DefaultAreaClass[] = [
  {
    identificador: "Area1",
    codigo: "A13",
    descricao: "SEPARAÇÃO DE GASES",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area2",
    codigo: "A14",
    descricao: "REFRIGERAÇÃO",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area3",
    codigo: "A25",
    descricao: "HIDRODENAÇÃO DE C9 DE PIROLISE",
    planta: "OLEFINAS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area4",
    codigo: "A31",
    descricao: "ESTOCAGEM DE MATERIAS PRIMAS 1",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area5",
    codigo: "A32",
    descricao: "ESTOCAGEM INTERMEDIAPLA",
    planta: "OLEFINAS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area6",
    codigo: "A34",
    descricao: "ESTOCAGEM CHIOGENICA",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area7",
    codigo: "A35",
    descricao: "ESFERAS DE ARMAZENAMENTO",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area8",
    codigo: "A36",
    descricao: "TANCAGEM DE PRODUTOS FINAIS 1",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area9",
    codigo: "A22",
    descricao: "EXTRAÇÃO DE AROMATICOS",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area10",
    codigo: "A37",
    descricao: "SISTEMA DE METANOL",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area11",
    codigo: "A38",
    descricao: "ESTOGAGEM DE HIDROGÈNIO",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area12",
    codigo: "ÁGUAS",
    descricao: "ESTAÇÃO DE TRATAMENTO DE ÁGUA",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area13",
    codigo: "VAPOR",
    descricao: "SISTEMADE GERAÇÃO DE VAPOR",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area14",
    codigo: "EE",
    descricao: "SISTEMA DE GERAÇÃO DE ENERGIA ELÉTRICA 1",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area15",
    codigo: "AR",
    descricao: "SISTEMA DE AGUA DE RESFHIAMENTO",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area16",
    codigo: "A62",
    descricao: "TRATAMENTO DE SODA GASTA",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area17",
    codigo: "A63",
    descricao: "CARREGAMENTO RODOFERROVIÁRIO",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area18",
    codigo: "A84",
    descricao: "SISTEMA DE PURGA E TOCHA 1",
    planta: "OLEFINAS T",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area19",
    codigo: "OLEO",
    descricao: "SISTEMA DE OLEO E GÁS COMBUSTÍVEL",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area20",
    codigo: "A23",
    descricao: "FRACIONAMENTO DE AROMÁTICOS",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area21",
    codigo: "A67",
    descricao: "RECUPERAÇÃO DE VAPORES",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area22",
    codigo: "TERG",
    descricao: "TERMINAL DE RIO GRANDE",
    planta: "UNGB 2RS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area23",
    codigo: "TESC",
    descricao: "TERMINAL SANTA CLARA",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area24",
    codigo: "TEDUT",
    descricao: "PARQUE DE ESTOCACIEM DE OSÓRIO",
    planta: "UNE 2 RS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const AreasDropdown = Areas.map((Area) => {
  return {
    label: Area.descricao,
    value: Area.codigo,
  };
});
