"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Utils_1 = require("../Lib/Utils");
const FundoEscala_1 = require("../Data/FundoEscala");
const Router = express_1.default.Router();
exports.Router = Router;
// Apply JSON parse
Router.use(express_1.default.json());
// Apply Middleware for Delay and Error simulation
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
Router.get("/", (REQ, RES) => {
    const mesAnoParam = REQ.query.mesAno;
    if (!mesAnoParam) {
        return RES.status(400).json({ sucesso: false, mensagem: "Parâmetro 'minMes' é obrigatório" });
    }
    const [month, year] = mesAnoParam.split("/").map(Number);
    if (isNaN(month) || isNaN(year)) {
        return RES.status(400).json({ sucesso: false, mensagem: "Parâmetro 'mesAno' deve estar no formato MM/YYYY" });
    }
    const startDate = new Date(year, month - 1, 1);
    const today = new Date();
    const endDate = today.getMonth() === month - 1 && today.getFullYear() === year ? today : new Date(year, month, 0); // Último dia do mês se o mês não for o atual
    const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const fundosEscala = [];
    let previousValueMedicao = null;
    for (let i = 0; i < daysDifference; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const fundoEscala = (0, FundoEscala_1.GenerateFundoEscala)(date, previousValueMedicao);
        fundosEscala.push(fundoEscala);
        previousValueMedicao = fundoEscala.valorMedicao;
    }
    const response = {
        data: fundosEscala,
        sucesso: true,
        mensagem: "Dados processados com sucesso",
        page: {
            totalPages: 1,
            currentPage: 1,
            rowsPerPage: fundosEscala.length,
            totalRows: fundosEscala.length,
        },
    };
    return RES.status(200).json(response);
});
Router.post("/", (REQ, RES) => {
    const response = {
        data: REQ.body,
        sucesso: true,
        mensagem: "Dados Recebidos",
    };
    RES.status(200).json(response);
});
