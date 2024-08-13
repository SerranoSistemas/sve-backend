import test from "node:test";
import { Medidor } from "./Types";

export const Medidores: Medidor[] = [
  {
    uuid: "131a00f8-2f68-44f7-8f19-88a6851424ba",
    identificador: "210FQI005A_1",
    tagDeLiberacao: "210FQI005A_1.PV",
    descricao: "Totalização - Vapor de Baixa",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSVE: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1,
    fatorDeConversaoSVE: 1,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: false,
    //Outras relações
    area: "b3a95180-1253-4aaf-8152-b08bced8cf88",
    produto: "48dd8740b889479XX5b5a414d309765a",
    estacaoDeMedicao: "48dd8740b889479ea5b5a414d309765a",
    servidorPims: "5ecd6bcc2bc84e2490d8891c9ebbea29",
    depositoSAP: "5ecd6bcc2bc84e2490d8891c9ebbea29",
    cliente: "a7e91a6b-ff7b-4dbf-8599-8f3dca9f04b3",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: false, //
    limiteDeMedicaoRuido: 6272632,
    comentarioDeLiberacao: "Comentário do Backend",
    executarLeituraNoPims: true,
    executarLiberacaoAutomatica: true,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },
  {
    uuid: "ad415a45-2737-406e-a301-ca0e08a18e25",
    identificador: "210FQI005A_1",
    tagDeLiberacao: "210FQI012_1.PV",
    descricao: "Totalização - Propeno",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSVE: "9d4b02e2-13de-497f-961d-64d80ff71b65", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1,
    fatorDeConversaoSVE: 1,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: true,
    //Outras relações
    area: "eecbaff0-8c9a-40e1-89e3-8c5d6c6b4a2f",
    produto: "72c6b29c-xxxx-41f0-b9f4-5b6eac65b215",
    estacaoDeMedicao: "48dd8740b889479ea5b5a414d309765a",
    servidorPims: "be9b1a1c-8cf7-41b8-9b90-32100e4e4fc5",
    depositoSAP: "ae1e15c62fde425bbafaaa16cc6e9d38",
    cliente: "d2853e3b-5a41-4e8c-9e55-9a57a6e3b8fc",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: true, //
    limiteDeMedicaoRuido: 21433421,
    comentarioDeLiberacao: "Comentário do Backend 2 ",
    executarLeituraNoPims: false,
    executarLiberacaoAutomatica: false,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },
  {
    uuid: "db14fe5d-7897-47eb-b07e-6eec6a199fc2",
    identificador: "210FQI340_1",
    tagDeLiberacao: "210FQI340_1.PV",
    descricao: "Totalização - Condensado Vapor",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "131a00f8-2f68-44f7-8f19-88a6851424ba",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c", //TO
    unidadeDeMedidaSVE: "9d4b02e2-13de-497f-961d-64d80ff71b65", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1.5,
    fatorDeConversaoSVE: 1.2,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: true,
    //Outras relações
    area: "eecbaff0-8c9a-40e1-89e3-8c5d6c6b4a2f",
    produto: "56e17b84-edcd-4ff7-8aaf-8af7a6ecdd88",
    estacaoDeMedicao: "657fafaa61804c1e8e8b72620780be69",
    servidorPims: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5",
    depositoSAP: "90f57609ef604d1ea4cc7420e6afba4f",
    cliente: "d2853e3b-5a41-4e8c-9e55-9a57a6e3b8fc",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: true, //
    limiteDeMedicaoRuido: 21433421,
    comentarioDeLiberacao: "Comentário do Backend 3 ",
    executarLeituraNoPims: false,
    executarLiberacaoAutomatica: false,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },

  //########################DAQUI PARA BAIXO SÓ REPETE OS ANTETIORES ###########################

  {
    uuid: "131a00f8-2f68-44f7-8f19-88a6851424ba-2",
    identificador: "210FQI005A_1",
    tagDeLiberacao: "210FQI005A_1.PV",
    descricao: "Totalização - Vapor de Baixa",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSVE: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1,
    fatorDeConversaoSVE: 1,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: false,
    //Outras relações
    area: "b3a95180-1253-4aaf-8152-b08bced8cf88",
    produto: "48dd8740b889479XX5b5a414d309765a",
    estacaoDeMedicao: "48dd8740b889479ea5b5a414d309765a",
    servidorPims: "5ecd6bcc2bc84e2490d8891c9ebbea29",
    depositoSAP: "5ecd6bcc2bc84e2490d8891c9ebbea29",
    cliente: "a7e91a6b-ff7b-4dbf-8599-8f3dca9f04b3",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: false, //
    limiteDeMedicaoRuido: 6272632,
    comentarioDeLiberacao: "Comentário do Backend",
    executarLeituraNoPims: true,
    executarLiberacaoAutomatica: true,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },
  {
    uuid: "ad415a45-2737-406e-a301-ca0e08a18e25-2",
    identificador: "210FQI005A_1",
    tagDeLiberacao: "210FQI012_1.PV",
    descricao: "Totalização - Propeno",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSVE: "9d4b02e2-13de-497f-961d-64d80ff71b65", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1,
    fatorDeConversaoSVE: 1,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: true,
    //Outras relações
    area: "eecbaff0-8c9a-40e1-89e3-8c5d6c6b4a2f",
    produto: "72c6b29c-xxxx-41f0-b9f4-5b6eac65b215",
    estacaoDeMedicao: "48dd8740b889479ea5b5a414d309765a",
    servidorPims: "be9b1a1c-8cf7-41b8-9b90-32100e4e4fc5",
    depositoSAP: "ae1e15c62fde425bbafaaa16cc6e9d38",
    cliente: "d2853e3b-5a41-4e8c-9e55-9a57a6e3b8fc",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: true, //
    limiteDeMedicaoRuido: 21433421,
    comentarioDeLiberacao: "Comentário do Backend 2 ",
    executarLeituraNoPims: false,
    executarLiberacaoAutomatica: false,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },
  {
    uuid: "db14fe5d-7897-47eb-b07e-6eec6a199fc2-2",
    identificador: "210FQI340_1",
    tagDeLiberacao: "210FQI340_1.PV",
    descricao: "Totalização - Condensado Vapor",
    limiteDeMedicao: 128172,
    limiteDeTotalizacao: 21762,
    medidorOficial: true,
    medidorDeParceiro: false,
    medidorParceiro: "131a00f8-2f68-44f7-8f19-88a6851424ba",
    //Unidades de Medida
    unidadeDeMedidaPims: "72c6b29c-b7c2-41f0-b9f4-5b6eac65b215", //TO
    unidadeDeMedidaSAP: "c8a7e37b-b06a-42b6-b594-3f2e51e6d98c", //TO
    unidadeDeMedidaSVE: "9d4b02e2-13de-497f-961d-64d80ff71b65", //TO
    //Fator de Conversão
    fatorDeConversaoSAP: 1.5,
    fatorDeConversaoSVE: 1.2,
    //Checkbox
    indicadorDeFaturamento: true,
    possuiMultaDeFundoDeEscala: true,
    //Outras relações
    area: "eecbaff0-8c9a-40e1-89e3-8c5d6c6b4a2f",
    produto: "56e17b84-edcd-4ff7-8aaf-8af7a6ecdd88",
    estacaoDeMedicao: "657fafaa61804c1e8e8b72620780be69",
    servidorPims: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5",
    depositoSAP: "90f57609ef604d1ea4cc7420e6afba4f",
    cliente: "d2853e3b-5a41-4e8c-9e55-9a57a6e3b8fc",
    //Itens de RPA
    liberarMedicaoSemAvaliacao: true, //
    limiteDeMedicaoRuido: 21433421,
    comentarioDeLiberacao: "Comentário do Backend 3 ",
    executarLeituraNoPims: false,
    executarLiberacaoAutomatica: false,
    dataDeCalibracao: new Date("2024-08-03T10:00:00Z"),
  },
];
