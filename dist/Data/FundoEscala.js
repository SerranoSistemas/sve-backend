"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateFundoEscala = void 0;
const uuid_1 = require("uuid");
const Utils_1 = require("../Lib/Utils");
const GenerateFundoEscala = (date, previousValueMedicao) => {
    const uuid = (0, uuid_1.v4)();
    const dia = date.getDate().toString();
    const minMes = Math.random() < 0.9 ? 0 : (0, Utils_1.GenerateRandomValue)(0, 450);
    const valorMedicao = previousValueMedicao ? previousValueMedicao + 1812 : (0, Utils_1.GenerateRandomValue)(4000, 15000);
    const multa = minMes > 0 ? valorMedicao / minMes : 0; // Calcula a multa apenas se minMes for maior que 0
    const situacao = Math.random() < 0.85 ? "L" : "P";
    return {
        uuid,
        minMes,
        dia,
        multa,
        valorMedicao,
        situacao,
    };
};
exports.GenerateFundoEscala = GenerateFundoEscala;
