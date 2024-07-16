import moment from "moment";
import { DefaultClass } from "./Types";

export const UnidadesDeMedida: DefaultClass[] = [
  {
    identificador: "Unid1",
    codigo: "TO",
    descricao: "Toneladas",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Unid2",
    codigo: "KG",
    descricao: "Quilogramas",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Unid3",
    codigo: "M3",
    descricao: "Metros Cúbicos",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Unid4",
    codigo: "MWH",
    descricao: "Megawatt hora",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Unid5",
    codigo: "NM3",
    descricao: "Normal metros cúbicos",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Unid6",
    codigo: "KWH",
    descricao: "Kilowatt hora",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const UnidadeMedidasDropdown = UnidadesDeMedida.map((UnidadeMedida) => {
  return {
    label: UnidadeMedida.descricao,
    value: UnidadeMedida.codigo,
  };
});
