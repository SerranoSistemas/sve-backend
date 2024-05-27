import moment from "moment";
import { DefaultClass, EstacoesMedicaoType } from "./Types";

export const EstacoesMedicao: DefaultClass[] = [
  {
    identificador: "estacao1",
    codigo: "BSM",
    descricao: "EMED OSM ELASTOMEROS",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao2",
    codigo: "INNOVA",
    descricao: "CMED INNOVA",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao3",
    codigo: "PPZIPES",
    descricao: "ENED PPEIPES",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao4",
    codigo: "OXITERO",
    descricao: "EMED OXITENG",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao5",
    codigo: "",
    descricao: "SMED PER",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao6",
    codigo: "PEA",
    descricao: "LMED PEA",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao7",
    codigo: "PPI",
    descricao: "LMED PPI",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao8",
    codigo: "LANXESS",
    descricao: "EMED LANXESS",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao9",
    codigo: "WHITE MARTINS",
    descricao: "SMED WHITE MARTINS",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "estacao10",
    codigo: "BRASKEM GREEN",
    descricao: "EMED BRASKEM GREEN",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const EstacoesMedicaoDropdown = EstacoesMedicao.map((Estacao) => {
  return {
    label: Estacao.descricao,
    value: Estacao.codigo,
  };
});
