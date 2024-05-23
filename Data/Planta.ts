export const Plantas = [
  {
    codigo: "UNIB 2 RS",
    descricao: "UNIB 2 RS",
  },
  {
    codigo: "ARO",
    descricao: "AROMÁTICOS",
  },
  {
    codigo: "OLE1",
    descricao: "OLEFINAS 1",
  },
  {
    codigo: "OLE2",
    descricao: "OLEFINAS 2",
  },
  {
    codigo: "EV",
    descricao: "ETENO VERDE",
  },
  {
    codigo: "UTIL",
    descricao: "UTILIDADES",
  },
];

export const PlantasDropdown = Plantas.map((Planta) => {
  return {
    label: Planta.descricao,
    value: Planta.codigo,
  };
});
