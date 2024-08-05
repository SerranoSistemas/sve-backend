"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Utils_1 = require("../Lib/Utils");
const GruposDeRede_1 = require("../Data/GruposDeRede");
const Router = express_1.default.Router();
exports.Router = Router;
//Apply JSON parse
Router.use(express_1.default.json());
//Apply Middleware for Delay and Error simulation
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
Router.get("/", (req, res) => res.status(200).json({ mensagem: "Módulo de Grupos de Rede" }));
Router.get("/select", (REQ, RES) => {
    const Response = {
        data: (0, Utils_1.GetList)(GruposDeRede_1.GruposDeRede),
        sucesso: true,
        mensagem: "Dados processados com sucesso",
    };
    return RES.status(200).json(Response);
});
Router.get("/:id", (REQ, RES) => {
    const data = (0, Utils_1.GetElementByID)(GruposDeRede_1.GruposDeRede, REQ.params.id);
    RES.status(200).json({
        //@ts-ignore
        data: [...data?.permissoes] || [],
        sucesso: data ? true : false,
        mensagem: data ? "Dados processados com sucesso" : "Dado não encontrado",
    });
});
Router.put("/:id", (REQ, RES) => {
    const Response = {
        data: REQ.body,
        sucesso: true,
        mensagem: `Editando Permissões do Grupo de Rede com ID: ${REQ.params.id}`,
    };
    RES.status(200).json(Response);
});
