import moment from "moment";
import { DefaultClass, ServersPIMS } from "./Types";

export const PIMSServers: DefaultClass[] = [
  {
    identificador: "PIMS1",
    codigo: "Eteno Verde",
    descricao: "INFOEV101",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS2",
    codigo: "Olefinas 1",
    descricao: "OLEFI1-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS3",
    codigo: "Olefinas 2",
    descricao: "OLEFI2-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS4",
    codigo: "Utilidades",
    descricao: "UTIL-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS5",
    codigo: "Conexão UNIB RS",
    descricao: "WTRI83",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const PIMSServersDropdown = PIMSServers.map((PIMS) => {
  return {
    label: PIMS.descricao,
    value: PIMS.identificador,
  };
});
