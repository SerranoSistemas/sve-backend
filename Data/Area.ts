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
    codigo: "A",
    descricao: "HIDRODENAÇÃO DE CE DE PIROLISE",
    planta: "OLEFINAS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area4",
    codigo: "",
    descricao: "ESTOCAGEM DE MATERIAS PRIMAS 1",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area5",
    codigo: "432",
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
    codigo: "",
    descricao: "ESTERAS DE ARMAZENAMENTO",
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
    codigo: "422",
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
    codigo: "",
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
    codigo: "NAPOR",
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
    descricao: "SISTEMADE AGUA DE HESFHIAMENTO",
    planta: "UTILIDADES",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area16",
    codigo: "462",
    descricao: "TRATAMENTO DE SODA GASTA",
    planta: "OLEFINAS 1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area17",
    codigo: "A",
    descricao: "CARREGAMENTO RODOFERROVIÁRIO",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area18",
    codigo: "A84",
    descricao: "SISTEMA DE PURGA E TOCHA",
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
    codigo: "ART",
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
    codigo: "TESO",
    descricao: "TERMINAL SANTA CLARA",
    planta: "AROMÁTICOS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area24",
    codigo: "TERHIT",
    descricao: "PARQUE DE ESTOCACIEM DE OSONID",
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
