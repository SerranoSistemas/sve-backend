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
const Medicao_1 = require("../Data/Medicao");
const Router = express_1.default.Router();
exports.Router = Router;
const HTTP_GET = Router.get.bind(Router);
//Apply JSON parse
Router.use(express_1.default.json());
//Apply Middleware for Delay and Error simulation
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
HTTP_GET("/", (REQ, RES) => {
    var Pagination = (0, Pagination_1.GetPagination)(REQ);
    Pagination.page = 1;
    Pagination.rows = 200;
    const { paginatedData, totalRows, currentPage, totalPages, rowsPerPage } = (0, Utils_1.PaginateAndSort)(Medicao_1.Medicoes, Pagination);
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
