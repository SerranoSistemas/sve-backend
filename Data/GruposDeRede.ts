const LEITURA = 10;
const ESCRITA = 20;

export const GruposDeRede = [
  {
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    descricao: "NETWORK_GROUP_ADMMASTER",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: LEITURA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: LEITURA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: LEITURA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: LEITURA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },
    ],
  },
  {
    uuid: "7c08fcfc-52d2-4d0d-89c2-bf89f4b8a6e1",
    descricao: "NETWORK_GROUP_ADMINISTRADOR-UNIT1",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: LEITURA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: LEITURA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: LEITURA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: LEITURA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: LEITURA },
      { chave: "4.5", valor: LEITURA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: LEITURA },
    ],
  },
  {
    uuid: "924d2cce-3b33-45af-9b15-fb5db8d2a4f2",
    descricao: "NETWORK_GROUP_OPERACIONAL-UNIT1",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: LEITURA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: LEITURA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: LEITURA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: LEITURA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: LEITURA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: LEITURA },
      { chave: "4.8", valor: ESCRITA },
    ],
  },
  {
    uuid: "eab10c5c-8e50-4adf-9e84-7b0a25f5e362",
    descricao: "NETWORK_GROUP_CONSULTA-UNIT1",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: LEITURA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: LEITURA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: LEITURA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: LEITURA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },
    ],
  },
  {
    uuid: "7a2758d8-7f56-4f92-8594-5c396376fd88",
    descricao: "NETWORK_GROUP_CUSTOMERSERVICE",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: LEITURA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: LEITURA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: LEITURA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: LEITURA },
    ],
  },
  {
    uuid: "0a17e8e0-45e0-4d56-9e20-1f9199089e3d",
    descricao: "NETWORK_GROUP_ADMINISTRADOR-UNIT2",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: LEITURA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: LEITURA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: LEITURA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: LEITURA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: LEITURA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: LEITURA },
    ],
  },
  {
    uuid: "8d7c3b3f-2b7b-411f-8478-abcdd59efbd9",
    descricao: "NETWORK_GROUP_OPERACIONAL-UNIT2",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: ESCRITA },
      { chave: "1.1", valor: LEITURA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: LEITURA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: ESCRITA },
      { chave: "3.1", valor: LEITURA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: LEITURA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: ESCRITA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: ESCRITA },
    ],
  },
  {
    uuid: "13e8f7ba-5f7d-40d9-8dcb-9dc1db98d3d5",
    descricao: "NETWORK_GROUP_CONSULTA-UNIT2",
    permissoes: [
      //TODAS AS PERMISSÔES CONCEDIDAS
      //SAP
      { chave: "1", valor: LEITURA },
      { chave: "1.1", valor: ESCRITA },
      { chave: "1.2", valor: ESCRITA },
      { chave: "1.3", valor: ESCRITA },
      { chave: "1.4", valor: ESCRITA },

      //ADM
      { chave: "2", valor: ESCRITA },
      { chave: "2.1", valor: ESCRITA },
      { chave: "2.2", valor: ESCRITA },
      { chave: "2.3", valor: ESCRITA },
      { chave: "2.4", valor: ESCRITA },
      { chave: "2.5", valor: ESCRITA },
      { chave: "2.6", valor: ESCRITA },

      //MOVIMENTACAO
      { chave: "3", valor: LEITURA },
      { chave: "3.1", valor: ESCRITA },
      { chave: "3.2", valor: ESCRITA },
      { chave: "3.3", valor: ESCRITA },

      //CADASTRO
      { chave: "4", valor: ESCRITA },
      { chave: "4.1", valor: ESCRITA },
      { chave: "4.2", valor: ESCRITA },
      { chave: "4.3", valor: ESCRITA },
      { chave: "4.4", valor: LEITURA },
      { chave: "4.5", valor: ESCRITA },
      { chave: "4.6", valor: ESCRITA },
      { chave: "4.7", valor: ESCRITA },
      { chave: "4.8", valor: LEITURA },
    ],
  },
];
