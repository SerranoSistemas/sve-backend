import moment from "moment";
import { DefaultClass, ServersPIMS } from "./Types";

export const PIMSServers: ServersPIMS[] = [
  {
    identificador: "PIMS1",
    title: "Eteno Verde",
    odbc: "INFOEV101",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS2",
    title: "Olefinas 1",
    odbc: "OLEFI1-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS3",
    title: "Olefinas 2",
    odbc: "OLEFI2-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS4",
    title: "Utilidades",
    odbc: "UTIL-IP21",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "PIMS5",
    title: "Conexão UNIB RS",
    odbc: "WTRI83",
    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const PIMSServersDropdown = PIMSServers.map((PIMS) => {
  return {
    label: PIMS.odbc,
    value: PIMS.identificador,
  };
});
