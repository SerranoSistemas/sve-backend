import { EstacoesMedicaoType } from "./Types";

export const EstacoesMedicao: EstacoesMedicaoType[] = [
  {
    id: "estacao1",
    codigo: "BSM",
    descricao: "EMED OSM ELASTOMEROS",
    observacao: "",
  },
  {
    id: "estacao2",
    codigo: "INNOVA",
    descricao: "CMED INNOVA",
    observacao: "",
  },
  {
    id: "estacao3",
    codigo: "PPZIPES",
    descricao: "ENED PPEIPES",
    observacao: "",
  },
  {
    id: "estacao4",
    codigo: "OXITERO",
    descricao: "EMED OXITENG",
    observacao: "",
  },
  {
    id: "estacao5",
    codigo: "",
    descricao: "SMED PER",
    observacao: "",
  },
  {
    id: "estacao6",
    codigo: "PEA",
    descricao: "LMED PEA",
    observacao: "",
  },
  {
    id: "estacao7",
    codigo: "PPI",
    descricao: "LMED PPI",
    observacao: "",
  },
  {
    id: "estacao8",
    codigo: "LANXESS",
    descricao: "EMED LANXESS",
    observacao: "",
  },
  {
    id: "estacao9",
    codigo: "WHITE MARTINS",
    descricao: "SMED WHITE MARTINS",
    observacao: "",
  },
  {
    id: "estacao10",
    codigo: "BRASKEM GREEN",
    descricao: "EMED BRASKEM GREEN",
    observacao: "",
  },
];

export const EstacoesMedicaoDropdown = EstacoesMedicao.map((Estacao) => {
  return {
    label: Estacao.descricao,
    value: Estacao.codigo,
  };
});
