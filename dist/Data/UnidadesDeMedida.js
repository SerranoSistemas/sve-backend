"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadesDeMedida = void 0;
const moment_1 = __importDefault(require("moment"));
const DatesInfo = {
    incluidoEm: (0, moment_1.default)(new Date()).unix(),
    alteradoEm: (0, moment_1.default)(new Date()).unix(),
    excluidoEm: null,
    incluidoPor: null,
    alteradoPor: null,
    excluidoPor: null,
};
exports.UnidadesDeMedida = [
    {
        uuid: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        identificador: "TO",
        descricao: "Toneladas",
        ...DatesInfo,
    },
    {
        uuid: "9d4b02e2-13de-497f-961d-64d80ff71b65",
        identificador: "KG",
        descricao: "Quilogramas",
        ...DatesInfo,
    },
    {
        uuid: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c",
        identificador: "M3",
        descricao: "Metros Cúbicos",
        ...DatesInfo,
    },
    {
        uuid: "c2b7b0ec-f658-45ed-908d-4d92be15e4d3",
        identificador: "MWH",
        descricao: "Megawatt hora",
        ...DatesInfo,
    },
    {
        uuid: "f8b32c4e-59f0-4c5e-8835-96d374aedaef",
        identificador: "NM3",
        descricao: "Normal metros cúbicos",
        ...DatesInfo,
    },
    {
        uuid: "ea92e3b1-5b54-41de-b1c8-0a4ffed558d3",
        identificador: "KWH",
        descricao: "Kilowatt hora",
        ...DatesInfo,
    },
];
