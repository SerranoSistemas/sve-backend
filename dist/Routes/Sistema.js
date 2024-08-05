"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Utils_1 = require("../Lib/Utils");
const Logotipo_1 = require("../Data/Logotipo");
const Router = express_1.default.Router();
exports.Router = Router;
//Apply JSON parse
Router.use(express_1.default.json());
//Apply Middleware
Router.use(Utils_1.Middleware);
// Use o middleware CORS
Router.use((0, cors_1.default)());
Router.get("/logotipo", (REQ, RES) => {
    // const Response = {
    //   data: Base64,
    //   sucesso: true,
    //    mensagem:  "Dados processados com sucesso",
    //   page: null,
    // };
    return RES.status(200).send(Logotipo_1.Base64);
});
Router.post("/logotipo", (REQ, RES) => {
    const Response = {
        data: {},
        sucesso: true,
        mensagem: "Imagem Inserida com Sucesso!",
        page: null,
    };
    return RES.status(200).json(Response);
});
Router.get("/inicio", (REQ, RES) => {
    const LEITURA = 10;
    const ESCRITA = 20;
    const Data = {
        nomeDoUsuario: "Usuário",
        nomeDoSistema: "Q 2 RS",
        idiomaPrimario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
        idiomaSecundario: { pt: "Teste PT", en: "Teste EN", es: "Teste ES" },
        permissoes: [
            //TODAS AS PERMISSÔES CONCEDIDAS
            //MODULO DE SAP
            { chave: "1", valor: ESCRITA },
            { chave: "1.1", valor: ESCRITA },
            { chave: "1.2", valor: ESCRITA },
            { chave: "1.3", valor: ESCRITA },
            { chave: "1.4", valor: ESCRITA },
            //MODULO DE ADM
            { chave: "2", valor: ESCRITA },
            { chave: "2.1", valor: ESCRITA },
            { chave: "2.2", valor: ESCRITA },
            { chave: "2.3", valor: ESCRITA },
            { chave: "2.4", valor: ESCRITA },
            { chave: "2.5", valor: ESCRITA },
            { chave: "2.6", valor: ESCRITA },
            //MODULO DE MOVIMENTACAO
            { chave: "3", valor: ESCRITA },
            { chave: "3.1", valor: ESCRITA },
            { chave: "3.2", valor: ESCRITA },
            { chave: "3.3", valor: ESCRITA },
            //MODULO DE CADASTRO
            { chave: "4", valor: ESCRITA },
            { chave: "4.1", valor: ESCRITA },
            { chave: "4.2", valor: ESCRITA },
            { chave: "4.3", valor: ESCRITA },
            { chave: "4.4", valor: ESCRITA },
            { chave: "4.5", valor: ESCRITA },
            { chave: "4.6", valor: ESCRITA },
            { chave: "4.7", valor: ESCRITA },
            { chave: "4.8", valor: ESCRITA },
        ],
    };
    const Response = {
        data: Data,
        sucesso: true,
        mensagem: "Dados processados com sucesso",
        page: null,
    };
    return RES.status(200).json(Response);
});
