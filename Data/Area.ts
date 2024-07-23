import moment from "moment";
import { DefaultAreaClass } from "./Types";
import { Copy } from "../Lib/Utils";

const DatesInfo = {
  incluidoEm: moment(new Date()).unix(),
  alteradoEm: moment(new Date()).unix(),
  excluidoEm: null,
  incluidoPor: null,
  alteradoPor: null,
  excluidoPor: null,
};

export const Areas = [
  {
    uuid: "123e4567-e89b-12d3-a456-426614174000",
    identificador: "A13",
    descricao: "SEPARAÇÃO DE GASES",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "123e4567-e89b-12d3-a456-426614174001",
    identificador: "A14",
    descricao: "REFRIGERAÇÃO",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "d91a9d37-6b6d-495d-bd1f-6e1f70e9245c",
    identificador: "A25",
    descricao: "HIDRODENAÇÃO DE C9 DE PIROLISE",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "1f50f8b6-8f58-4689-88da-f13cbf0e6768",
    identificador: "A31",
    descricao: "ESTOCAGEM DE MATERIAS PRIMAS 1",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "f5f8c667-3f29-4885-857b-c805b9d9a834",
    identificador: "A32",
    descricao: "ESTOCAGEM INTERMEDIAPLA",
    planta: "98ab1e13-4203-4cb4-8a88-2f77e4bc7d33", //OLE2
    ...DatesInfo,
  },
  {
    uuid: "eecbaff0-8c9a-40e1-89e3-8c5d6c6b4a2f",
    identificador: "A34",
    descricao: "ESTOCAGEM CHIOGENICA",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "b3a95180-1253-4aaf-8152-b08bced8cf88",
    identificador: "A35",
    descricao: "ESFERAS DE ARMAZENAMENTO",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "82f1ab2c-e9d1-4680-9295-e13d92f382df",
    identificador: "A36",
    descricao: "TANCAGEM DE PRODUTOS FINAIS 1",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "fb37f2df-7357-4fbb-8f9f-50dcfcad0bb4",
    identificador: "A22",
    descricao: "EXTRAÇÃO DE AROMATICOS",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "dd6848e7-75b5-414e-9f0d-9e4b38abfaba",
    identificador: "A37",
    descricao: "SISTEMA DE METANOL",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "06d7be18-8ba6-49b8-84ec-2d5a1ddf9141",
    identificador: "A38",
    descricao: "ESTOGAGEM DE HIDROGÈNIO",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "c6d603d6-3e65-4f20-8b1b-3ffbbd43e3f5",
    identificador: "ÁGUAS",
    descricao: "ESTAÇÃO DE TRATAMENTO DE ÁGUA",
    planta: "2e67c81e-0280-4b5a-bb9a-0b4695f1b6b1", //UTIL
    ...DatesInfo,
  },
  {
    uuid: "fe33a2e0-fb88-47df-b9b8-402c5a62d929",
    identificador: "VAPOR",
    descricao: "SISTEMADE GERAÇÃO DE VAPOR",
    planta: "2e67c81e-0280-4b5a-bb9a-0b4695f1b6b1", //UTIL
    ...DatesInfo,
  },
  {
    uuid: "82cf2597-7d79-4c3b-a84f-5b0b6c5678c0",
    identificador: "EE",
    descricao: "SISTEMA DE GERAÇÃO DE ENERGIA ELÉTRICA 1",
    planta: "2e67c81e-0280-4b5a-bb9a-0b4695f1b6b1", //UTIL
    ...DatesInfo,
  },
  {
    uuid: "bc2336f0-1453-401d-8b5d-6b9f91e8b646",
    identificador: "AR",
    descricao: "SISTEMA DE AGUA DE RESFHIAMENTO",
    planta: "2e67c81e-0280-4b5a-bb9a-0b4695f1b6b1", //UTIL
    ...DatesInfo,
  },
  {
    uuid: "d378ba62-65b8-49a1-9b36-fc86715e4ed6",
    identificador: "A62",
    descricao: "TRATAMENTO DE SODA GASTA",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "3b2df68d-8b59-4f17-a72d-c7388b5e536e",
    identificador: "A63",
    descricao: "CARREGAMENTO RODOFERROVIÁRIO",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "925f36a2-d6d4-49c4-9fa7-1bb1a65739e3",
    identificador: "A84",
    descricao: "SISTEMA DE PURGA E TOCHA 1",
    planta: "be9b1a1c-8cf7-41b8-9b90-54100e4e4fc5", //OLE1
    ...DatesInfo,
  },
  {
    uuid: "61e1e4b5-abb3-47a3-bb8f-b5d7ecb2e786",
    identificador: "OLEO",
    descricao: "SISTEMA DE OLEO E GÁS COMBUSTÍVEL",
    planta: "2e67c81e-0280-4b5a-bb9a-0b4695f1b6b1", //UTIL
    ...DatesInfo,
  },
  {
    uuid: "d0f418db-40ae-4dc2-a9cb-b71c29e68d8c",
    identificador: "A23",
    descricao: "FRACIONAMENTO DE ARO",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "ef491c3b-676d-43c1-b550-47a0a1ec0b4b",
    identificador: "A67",
    descricao: "RECUPERAÇÃO DE VAPORES",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "a75f7c56-9ba5-4c7d-b486-90f6e0a4e0c1",
    identificador: "TERG",
    descricao: "TERMINAL DE RIO GRANDE",
    planta: "4b2e0c19-40b4-4f0d-b72b-4e6dfb5a6c28", //UNIB 2
    ...DatesInfo,
  },
  {
    uuid: "bb728a28-d193-41da-96ae-72782b89c4da",
    identificador: "TESC",
    descricao: "TERMINAL SANTA CLARA",
    planta: "7f8a2d22-0e0c-49d9-8edc-14ec1f108c3a", //ARO
    ...DatesInfo,
  },
  {
    uuid: "4d0918d0-ec9b-4118-a8c4-1ab271b7f74b",
    identificador: "TEDUT",
    descricao: "PARQUE DE ESTOCACIEM DE OSÓRIO",
    planta: "4b2e0c19-40b4-4f0d-b72b-4e6dfb5a6c28", //UNIB 2
    ...DatesInfo,
  },
];

export const AreasDropdown = Areas.map((Area) => {
  return {
    label: Area.descricao,
    value: Area.uuid,
  };
});

export const FilterAreaJoins = (data: any[], planta: string) => {
  if (!planta) return data;

  var NewData = Copy(data);

  NewData = data.filter((Item) => {
    const PlantaFilter = planta ? Item.planta === planta : true;

    return PlantaFilter;
  });

  return NewData;
};

export const FilterAreaText = (data: any[], text: string | null) => {
  if (!text) return data;

  var NewData = Copy(data);

  NewData = data.filter((Item) => {
    const codigoText = Item.codigo.includes(text);
    const descricaoText = Item.descricao.toLowerCase().includes(text.toLowerCase());
    const plantaText = Item.planta.toLowerCase().includes(text.toLowerCase());

    return codigoText || descricaoText || plantaText;
  });

  return NewData;
};
