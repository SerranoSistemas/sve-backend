import moment from "moment";
import { DefaultClass } from "./Types";

export const Plantas: DefaultClass[] = [
  {
    identificador: "Plant1",
    codigo: "UNIB 2 RS",
    descricao: "UNIB 2 RS",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Plant2",
    codigo: "ARO",
    descricao: "AROMÁTICOS",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Plant3",
    codigo: "OLE1",
    descricao: "OLEFINAS 1",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Plant4",
    codigo: "OLE2",
    descricao: "OLEFINAS 2",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Plant5",
    codigo: "EV",
    descricao: "ETENO VERDE",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Plant6",
    codigo: "UTIL",
    descricao: "UTILIDADES",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const PlantasDropdown = Plantas.map((Planta) => {
  return {
    label: Planta.descricao,
    value: Planta.codigo,
  };
});
