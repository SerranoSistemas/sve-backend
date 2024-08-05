"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIMSServers = void 0;
const moment_1 = __importDefault(require("moment"));
const DatesInfo = {
    incluidoEm: (0, moment_1.default)(new Date()).unix(),
    alteradoEm: (0, moment_1.default)(new Date()).unix(),
    excluidoEm: null,
    incluidoPor: null,
    alteradoPor: null,
    excluidoPor: null,
};
exports.PIMSServers = [
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
