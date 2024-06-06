import moment from "moment";
import { DefaultAreaClass } from "./Types";
import { Copy } from "../Lib/Utils";

export const Areas: DefaultAreaClass[] = [
  {
    identificador: "Area1",
    codigo: "A13",
    descricao: "SEPARAÇÃO DE GASES",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area2",
    codigo: "A14",
    descricao: "REFRIGERAÇÃO",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area3",
    codigo: "A25",
    descricao: "HIDRODENAÇÃO DE C9 DE PIROLISE",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area4",
    codigo: "A31",
    descricao: "ESTOCAGEM DE MATERIAS PRIMAS 1",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area5",
    codigo: "A32",
    descricao: "ESTOCAGEM INTERMEDIAPLA",
    planta: "OLE2",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area6",
    codigo: "A34",
    descricao: "ESTOCAGEM CHIOGENICA",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area7",
    codigo: "A35",
    descricao: "ESFERAS DE ARMAZENAMENTO",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area8",
    codigo: "A36",
    descricao: "TANCAGEM DE PRODUTOS FINAIS 1",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area9",
    codigo: "A22",
    descricao: "EXTRAÇÃO DE AROMATICOS",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area10",
    codigo: "A37",
    descricao: "SISTEMA DE METANOL",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area11",
    codigo: "A38",
    descricao: "ESTOGAGEM DE HIDROGÈNIO",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area12",
    codigo: "ÁGUAS",
    descricao: "ESTAÇÃO DE TRATAMENTO DE ÁGUA",
    planta: "UTIL",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area13",
    codigo: "VAPOR",
    descricao: "SISTEMADE GERAÇÃO DE VAPOR",
    planta: "UTIL",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area14",
    codigo: "EE",
    descricao: "SISTEMA DE GERAÇÃO DE ENERGIA ELÉTRICA 1",
    planta: "UTIL",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area15",
    codigo: "AR",
    descricao: "SISTEMA DE AGUA DE RESFHIAMENTO",
    planta: "UTIL",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area16",
    codigo: "A62",
    descricao: "TRATAMENTO DE SODA GASTA",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area17",
    codigo: "A63",
    descricao: "CARREGAMENTO RODOFERROVIÁRIO",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area18",
    codigo: "A84",
    descricao: "SISTEMA DE PURGA E TOCHA 1",
    planta: "OLE1",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area19",
    codigo: "OLEO",
    descricao: "SISTEMA DE OLEO E GÁS COMBUSTÍVEL",
    planta: "UTIL",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area20",
    codigo: "A23",
    descricao: "FRACIONAMENTO DE ARO",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area21",
    codigo: "A67",
    descricao: "RECUPERAÇÃO DE VAPORES",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area22",
    codigo: "TERG",
    descricao: "TERMINAL DE RIO GRANDE",
    planta: "UNIB 2 RS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area23",
    codigo: "TESC",
    descricao: "TERMINAL SANTA CLARA",
    planta: "ARO",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
  {
    identificador: "Area24",
    codigo: "TEDUT",
    descricao: "PARQUE DE ESTOCACIEM DE OSÓRIO",
    planta: "UNIB 2 RS",

    incluidoEm: moment(new Date()).unix(),
    alteradoEm: moment(new Date()).unix(),
  },
];

export const AreasDropdown = Areas.map((Area) => {
  return {
    label: Area.descricao,
    value: Area.codigo,
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
