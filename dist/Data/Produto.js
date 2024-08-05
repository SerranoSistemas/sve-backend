"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProdutoText = exports.FilterProdutoJoins = exports.Produtos = void 0;
const moment_1 = __importDefault(require("moment"));
const Utils_1 = require("../Lib/Utils");
const DatesInfo = {
    incluidoEm: (0, moment_1.default)(new Date()).unix(),
    alteradoEm: (0, moment_1.default)(new Date()).unix(),
    excluidoEm: null,
    incluidoPor: null,
    alteradoPor: null,
    excluidoPor: null,
};
exports.Produtos = [
    {
        uuid: "85f1e645-3bc2-49a7-a4c4-82a627d5c81f",
        identificador: "P013",
        descricao: "ETENO FÓSSIL",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod2",
        identificador: "P048",
        descricao: "PROPENO GP",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod3",
        identificador: "P420",
        descricao: "BUTENO-1",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod4",
        identificador: "P056",
        descricao: "BUTADIENO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod5",
        identificador: "P064",
        descricao: "BENZENO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod6",
        identificador: "P145",
        descricao: "HIDROGÊNIO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod7",
        identificador: "G013",
        descricao: "ETENO VERDE",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod8",
        identificador: "U073",
        descricao: "ÁGUA DESMINERALIZADA",
        unidadeMedida: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c",
        ...DatesInfo,
    },
    {
        uuid: "Prod9",
        identificador: "U081",
        descricao: "ÁGUA CLARIFICADA",
        unidadeMedida: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c",
        ...DatesInfo,
    },
    {
        uuid: "Prod10",
        identificador: "U099",
        descricao: "ÁGUA POTÁVEL",
        unidadeMedida: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c",
        ...DatesInfo,
    },
    {
        uuid: "Prod11",
        identificador: "U204",
        descricao: "VAPOR DE BAIXA",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod12",
        identificador: "U205",
        descricao: "VAPOR DE MÉDIA",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod13",
        identificador: "U014",
        descricao: "VAPOR DE ALTA",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod14",
        identificador: "C2RET",
        descricao: "ETENO RETORNO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod15",
        identificador: "C3RET",
        descricao: "PROPENO RETORNO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod16",
        identificador: "RETORNO DE OFF GAS",
        descricao: "CORRENTE RETORNO GASOSO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod17",
        identificador: "2100179",
        descricao: "BUTENOS EXAUSTOS",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod18",
        identificador: "P804",
        descricao: "C4 PESADO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod19",
        identificador: "554103",
        descricao: "NITROGÊNIO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod20",
        identificador: "P800",
        descricao: "PROPANO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod21",
        identificador: "P033",
        descricao: "PROPENO GQ",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod22",
        identificador: "U073R",
        descricao: "CONDENSADO DE VAPOR",
        unidadeMedida: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c",
        ...DatesInfo,
    },
    {
        uuid: "Prod23",
        identificador: "U049",
        descricao: "ENERGIA ELÉTRICA",
        unidadeMedida: "c2b7b0ec-f658-45ed-908d-4d92be15e4d3",
        ...DatesInfo,
    },
    {
        uuid: "Prod24",
        identificador: "U057",
        descricao: "AR DE SERVIÇO",
        unidadeMedida: "f8b32c4e-59f0-4c5e-8835-96d374aedaef",
        ...DatesInfo,
    },
    {
        uuid: "Prod25",
        identificador: "U065",
        descricao: "AR DE INSTRUMENTO",
        unidadeMedida: "f8b32c4e-59f0-4c5e-8835-96d374aedaef",
        ...DatesInfo,
    },
    {
        uuid: "Prod26",
        identificador: "EVRES",
        descricao: "EVRES",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod27",
        identificador: "598482S",
        descricao: "Etanol",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod28",
        identificador: "AD MP",
        descricao: "ÁGUA DESMIN. DE MÉDIA PRESSÃO",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod29",
        identificador: "P632",
        descricao: "GÁS COMBUSTÍVEL",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
    {
        uuid: "Prod30",
        identificador: "SODA.",
        descricao: "SODA FRESCA",
        unidadeMedida: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215",
        ...DatesInfo,
    },
];
const FilterProdutoJoins = (data, unidadeMedida) => {
    if (!unidadeMedida)
        return data;
    var NewData = (0, Utils_1.Copy)(data);
    NewData = data.filter((Item) => {
        const Filter = unidadeMedida ? Item.unidadeMedida === unidadeMedida : true;
        return Filter;
    });
    return NewData;
};
exports.FilterProdutoJoins = FilterProdutoJoins;
const FilterProdutoText = (data, text) => {
    if (!text)
        return data;
    var NewData = (0, Utils_1.Copy)(data);
    NewData = data.filter((Item) => {
        const codigoText = Item.codigo.includes(text);
        const descricaoText = Item.descricao.toLowerCase().includes(text.toLowerCase());
        const unidadeMedida = Item.unidadeMedida.toLowerCase().includes(text.toLowerCase());
        return codigoText || descricaoText || unidadeMedida;
    });
    return NewData;
};
exports.FilterProdutoText = FilterProdutoText;
