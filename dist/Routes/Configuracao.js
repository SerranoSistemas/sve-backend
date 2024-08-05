"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Utils_1 = require("../Lib/Utils");
const Router = express_1.default.Router();
exports.Router = Router;
//Apply JSON parse
Router.use(express_1.default.json());
//Apply Middleware for Delay and Error simulation
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
Router.get("/", (REQ, RES) => {
    const Response = {
        data: {
            nomeDoSistema: "Q 2 RS",
            servidorTibco: "Servidor TIBCO",
            servidorEscritaPims: "PIMS5",
            sapVKORG: "BR10",
            sapPONO: "10",
            sapSIST: "UNIB-RS",
            emailServidor: "Email Servidor ",
            emailConta: "Email Conta",
            emailSenha: "Email Senha ",
            emailPorta: "Email Porta",
            adDominio: "AD dominio",
            adUsuario: "AD dominio",
            adHost: "AD dominio",
            comunicarComPims: "1", //Vem em string 0 OU 1
            horarioDeCorte: "03:00", //'00:00'
            horarioTransferenciasAutomaticas: "10:00",
            idiomaPrimario: {
                pt: "Teste PT",
                en: "Teste EN",
                es: "Teste ES",
            },
            idiomaSecundario: {
                pt: "Teste PT",
                en: "Teste EN",
                es: "Teste ES",
            },
        },
        sucesso: true,
        mensagem: "Dados processados com sucesso",
        page: null,
    };
    return RES.status(200).json(Response);
});
Router.put("/", (REQ, RES) => {
    const Response = {
        data: REQ.body,
        sucesso: true,
        mensagem: `Editando Configurações`,
    };
    RES.status(200).json(Response);
});
