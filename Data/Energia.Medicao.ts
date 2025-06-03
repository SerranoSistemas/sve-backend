export const medicoesEnergiaArray = [
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "3b6a1d7ad4ec4se22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "2827a2se7bd46436f8eda4f903099df31",
      identificador: "210FQI340_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "3b6as1d7ad4ec4e22913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "3b6a1d7ad4ec4e22s913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "3b6a1d7ad4ec4e2s2913d8006e9382631",
      identificador: "210FQI005A_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6a480a4s6198b455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6a480a46198b4s55abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6a480a46198sb455abd525ab3be572015",
      identificador: "210FQI012_1.PV",
    },
  },
];

export const MedicoesEnergia = medicoesEnergiaArray.map((item) => {
  return {
    ...item,
  };
});
