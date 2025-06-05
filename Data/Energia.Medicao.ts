export const medicoesEnergiaArray = [
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6a480a46198b455abd525ab3be572015",
      identificador: "210FQI005A_2.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "6eab7f1b11d74afb8c9da77bb90d61cd",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "3112683324fb4d4eba62eafd43fc7593",
      identificador: "210FQI340_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "657d0f1a5bcd48d5989a473d983da3e8",
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
      uuid: "a47888cdb02a4ff8b643fa920e7a0b2d",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "406b5aa0105e46cba7fd32db2628de24",
      identificador: "210FQI012_1.PV",
    },
  },
  {
    produto: "ENERGIA ELETRICA 13.8 KV",
    medidor: {
      uuid: "684dfdce3f764d9ba7610b33a2d52fed",
      identificador: "210FQI012_1.PV",
    },
  },
];

export const MedicoesEnergia = medicoesEnergiaArray.map((item) => {
  return {
    ...item,
  };
});
