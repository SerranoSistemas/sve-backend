"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Utils_1 = require("../Lib/Utils");
const Pagination_1 = require("../Data/Pagination");
const Clientes_1 = require("../Data/Clientes");
const OBJECT = "Cliente";
const Router = express_1.default.Router();
exports.Router = Router;
//Apply JSON parse
Router.use(express_1.default.json());
//Apply Middleware for Delay and Error simulation
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
Router.get("/", (REQ, RES) => {
    //FILTROS E PAGINAÇÂO
    const Pagination = (0, Pagination_1.GetPagination)(REQ);
    const Text = REQ.query?.text?.toString() || "";
    const FilteredData = (0, Utils_1.Filter)(Clientes_1.Clientes, Text);
    const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = (0, Utils_1.PaginateAndSort)(FilteredData, Pagination);
    const Response = {
        data: paginatedData,
        sucesso: true,
        mensagem: "Dados processados com sucesso",
        page: {
            totalRows,
            currentPage,
            totalPages,
            rowsPerPage,
        },
    };
    return RES.status(200).json(Response);
});
Router.get("/select", (REQ, RES) => {
    const Response = {
        data: (0, Utils_1.GetList)(Clientes_1.Clientes),
        sucesso: true,
        mensagem: "Dados processados com sucesso",
    };
    return RES.status(200).json(Response);
});
Router.get("/:id", (REQ, RES) => {
    const data = (0, Utils_1.GetElementByID)(Clientes_1.Clientes, REQ.params.id);
    RES.status(200).json({
        data: data || {},
        sucesso: data ? true : false,
        mensagem: data ? "Dados processados com sucesso" : "Dado não encontrado",
    });
});
Router.put("/:id", (REQ, RES) => {
    const Response = {
        data: REQ.body,
        sucesso: true,
        mensagem: `Editando ${OBJECT} com ID: ${REQ.params.id}`,
    };
    RES.status(200).json(Response);
});
Router.post("/", (REQ, RES) => {
    const Response = {
        data: REQ.body,
        sucesso: true,
        mensagem: `Adicionando ${OBJECT}`,
    };
    RES.status(200).json(Response);
});
Router.delete("/:id", (REQ, RES) => {
    const Response = {
        data: {},
        sucesso: true,
        mensagem: `Deletando ${OBJECT} com ID: ${REQ.params.id}`,
    };
    RES.status(200).json(Response);
});
