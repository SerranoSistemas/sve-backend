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
    uuid: "5ecd6bcc2bc84e2490d8891c9ebbea29",
    identificador: "Eteno Verde",
    descricao: "INFOEV101",
    ...DatesInfo,
  },
  {
    uuid: "85f1e645-3bc2-49a7-a4c4-82a627d5c81f",
    identificador: "Olefinas 1",
    descricao: "OLEFI1-IP21",
    ...DatesInfo,
  },
  {
    uuid: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5",
    identificador: "Olefinas 2",
    descricao: "OLEFI2-IP21",
    ...DatesInfo,
  },
  {
    uuid: "be9b1a1c-8cf7-41b8-9b90-32100e4e4fc5",
    identificador: "Utilidades",
    descricao: "UTIL-IP21",
    ...DatesInfo,
  },
  {
    uuid: "be9CCCC-8cf7-41b8-9b90-54100e4e4fc5",
    identificador: "Conexão UNIB RS",
    descricao: "WTRI83",
    ...DatesInfo,
  },
];
