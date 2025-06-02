import { PlantaCodigoGenerator, PlantaDescGenerator } from "../Lib/MockDataGenerator";

export const PlantasArray = [
  {
    uuid: "31627ac5df9a4f149bcac118d5e42cef",
    identificador: "TESTE",
    descricao: "AROMÁTICOS",
    incluidoEm: "14/12/2011",
    alteradoEm: "11/09/2024",
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
  {
    uuid: "ecf73c416ab745f7b1d759a98cc72d07",
    identificador: "EV",
    descricao: "ETENO VERDE",
    incluidoEm: "14/12/2011",
    alteradoEm: null,
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
  {
    uuid: "72985d8d7c994a18a39074c0821090b2",
    identificador: "OLE1",
    descricao: "OLEFINAS 1",
    incluidoEm: "14/12/2011",
    alteradoEm: null,
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
  {
    uuid: "da586164519d46e4a0b21e7f4c473625",
    identificador: "OLE2",
    descricao: "OLEFINAS 2",
    incluidoEm: "14/12/2011",
    alteradoEm: null,
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
  {
    uuid: "c5b2b8439d5d49fa8e371ed70dc88cce",
    identificador: "UNIB 2 RS",
    descricao: "UNIB 2 RS",
    incluidoEm: "13/12/2011",
    alteradoEm: null,
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
  {
    uuid: "aa4549ab9f564810bbb5bf6773d973db",
    identificador: "UTIL",
    descricao: "UTILIDADES",
    incluidoEm: "14/12/2011",
    alteradoEm: null,
    excluidoEm: null,
    incluidoPor: "CARGA",
    alteradoPor: null,
    excluidoPor: null,
  },
];

export const Plantas = PlantasArray.map((item) => {
  return {
    ...item,
    // identificador: PlantaCodigoGenerator(),
    // descricao: PlantaDescGenerator(),
  };
});
