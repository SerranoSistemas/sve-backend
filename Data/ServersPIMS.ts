import moment from "moment";

const DatesInfo = {
  incluidoEm: moment(new Date()).unix(),
  alteradoEm: moment(new Date()).unix(),
  excluidoEm: null,
  incluidoPor: null,
  alteradoPor: null,
  excluidoPor: null,
};

export const PIMSServers = [
  {
    uuid: "PIMS1",
    identificador: "Eteno Verde",
    descricao: "INFOEV101",
    ...DatesInfo,
  },
  {
    uuid: "PIMS2",
    identificador: "Olefinas 1",
    descricao: "OLEFI1-IP21",
    ...DatesInfo,
  },
  {
    uuid: "PIMS3",
    identificador: "Olefinas 2",
    descricao: "OLEFI2-IP21",
    ...DatesInfo,
  },
  {
    uuid: "PIMS4",
    identificador: "Utilidades",
    descricao: "UTIL-IP21",
    ...DatesInfo,
  },
  {
    uuid: "PIMS5",
    identificador: "Conexão UNIB RS",
    descricao: "WTRI83",
    ...DatesInfo,
  },
];
