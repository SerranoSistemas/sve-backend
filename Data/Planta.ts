import { PlantaType } from "./Types";

export const Plantas: PlantaType[] = [
  {
    id: "PLant1",
    codigo: "UNIB 2 RS",
    descricao: "UNIB 2 RS",
  },
  {
    id: "PLant2",
    codigo: "ARO",
    descricao: "AROMÁTICOS",
  },
  {
    id: "PLant3",
    codigo: "OLE1",
    descricao: "OLEFINAS 1",
  },
  {
    id: "PLant4",
    codigo: "OLE2",
    descricao: "OLEFINAS 2",
  },
  {
    id: "PLant5",
    codigo: "EV",
    descricao: "ETENO VERDE",
  },
  {
    id: "PLant6",
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
