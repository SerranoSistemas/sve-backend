"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRandomValue = exports.InnerJoins = exports.GetList = exports.FilterByKey = exports.Filter = exports.GetElementByID = exports.PaginateAndSort = exports.Middleware = exports.Copy = void 0;
const Planta_1 = require("../Data/Planta");
const Pagination_1 = require("../Data/Pagination");
const UnidadesDeMedida_1 = require("../Data/UnidadesDeMedida");
const Copy = (data) => {
    return JSON.parse(JSON.stringify(data));
};
exports.Copy = Copy;
const Middleware = (REQ, RES, NEXT) => {
    if (REQ.query.gerarErro) {
        const ErrorResponse = {
            data: {},
            sucesso: false,
            mensagem: "Ocorreu um Erro, tente novamente",
            page: {},
        };
        return RES.status(500).json(ErrorResponse);
    }
    if (REQ.query.status) {
        //@ts-ignore
        RES.status(parseInt(REQ.query.status, 200));
    }
    if (REQ.query.delay) {
        //@ts-ignore
        const delayInMs = parseInt(REQ.query.delay, 10);
        if (!isNaN(delayInMs)) {
            setTimeout(() => {
                NEXT();
            }, delayInMs);
            return;
        }
    }
    NEXT();
};
exports.Middleware = Middleware;
const PaginateAndSort = (data, pagination = Pagination_1.DefaultPagination) => {
    const { page, rows, orderBy, orderDirection } = pagination;
    if (!data.length) {
        return {
            data: [],
            totalRows: 0,
            currentPage: page,
            totalPages: 0,
        };
    }
    let sortedData = [...data];
    if (orderBy) {
        sortedData.sort((a, b) => {
            if (a[orderBy] < b[orderBy])
                return orderDirection === "asc" ? -1 : 1;
            if (a[orderBy] > b[orderBy])
                return orderDirection === "asc" ? 1 : -1;
            return 0;
        });
    }
    // Calcule o índice inicial e final para a paginação
    const startIndex = (page - 1) * rows;
    const endIndex = startIndex + rows;
    // Verifica se o índice inicial está fora do intervalo
    if (startIndex >= sortedData.length) {
        return {
            data: [],
            totalRows: sortedData.length,
            currentPage: page,
            totalPages: Math.ceil(sortedData.length / rows),
        };
    }
    // Calcule o total de páginas
    const totalPages = Math.ceil(sortedData.length / rows);
    // Retorne os dados paginados e as informações adicionais
    return {
        paginatedData: sortedData.slice(startIndex, Math.min(endIndex, sortedData.length)) || [],
        totalRows: sortedData.length,
        currentPage: page,
        totalPages: totalPages,
        rowsPerPage: rows,
    };
};
exports.PaginateAndSort = PaginateAndSort;
const GetElementByID = (data, Id, List) => {
    return data.find((Element) => Element.uuid === Id || Element.identificador === Id);
};
exports.GetElementByID = GetElementByID;
const Filter = (data, text, type) => {
    if (!text)
        return data;
    return data.filter((item) => {
        return Object.keys(item).some((key) => {
            const value = item[key];
            return typeof value === "string" && value.toLowerCase().includes(text.toLowerCase());
        });
    });
};
exports.Filter = Filter;
const FilterByKey = (data, key, value) => {
    if (!value)
        return data;
    return data.filter((item) => item[key] === value);
};
exports.FilterByKey = FilterByKey;
const GetList = (Data) => {
    return Data.map((Item) => {
        return {
            descricao: Item.descricao,
            uuid: Item.uuid,
        };
    });
};
exports.GetList = GetList;
const InnerJoins = (data, type) => {
    var NewData = (0, exports.Copy)(data);
    var RefData;
    var Key;
    if (type === "Areas") {
        RefData = Planta_1.Plantas;
        Key = "planta";
    }
    if (type === "Produtos") {
        RefData = UnidadesDeMedida_1.UnidadesDeMedida;
        Key = "unidadeMedida";
    }
    NewData = NewData.map((Item) => {
        const RefDataUnit = RefData.find((item) => item.uuid === Item[Key]);
        Item[Key] = RefDataUnit?.descricao || "";
        return Item;
    });
    return NewData;
};
exports.InnerJoins = InnerJoins;
const GenerateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.GenerateRandomValue = GenerateRandomValue;
