export const EstacoesMedicao = [
  {
    codigo: "BSM",
    descricao: "EMED OSM ELASTOMEROS",
    observacao: "",
  },
  {
    codigo: "INNOVA",
    descricao: "CMED INNOVA",
    observacao: "",
  },
  {
    codigo: "PPZIPES",
    descricao: "ENED PPEIPES",
    observacao: "",
  },
  {
    codigo: "OXITERO",
    descricao: "EMED OXITENG",
    observacao: "",
  },
  {
    codigo: "",
    descricao: "SMED PER",
    observacao: "",
  },
  {
    codigo: "PEA",
    descricao: "LMED PEA",
    observacao: "",
  },
  {
    codigo: "PPI",
    descricao: "LMED PPI",
    observacao: "",
  },
  {
    codigo: "LANXESS",
    descricao: "EMED LANXESS",
    observacao: "",
  },
  {
    codigo: "WHITE MARTINS",
    descricao: "SMED WHITE MARTINS",
    observacao: "",
  },
  {
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
