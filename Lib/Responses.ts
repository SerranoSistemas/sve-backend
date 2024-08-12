import { ResponseType } from "../Data/Types";

export const GetElementByIDResponse = (Data: any) => {
  const Response: ResponseType = {
    data: Data ? Data : {},
    sucesso: Data ? true : false,
    mensagem: Data ? "Dados processados com sucesso" : "Dado não encontrado",
    page: null,
  };

  return Response;
};

export const CadastroPUTResponse = (Data: any) => {
  const Response: ResponseType = {
    data: Data ? Data : {},
    sucesso: true,
    mensagem: `Edição Realizada com Sucesso`,
  };

  return Response;
};

export const CadastroPOSTResponse = (Data: any) => {
  const Response: ResponseType = {
    data: Data ? Data : {},
    sucesso: true,
    mensagem: `Adição Realizada com Sucesso`,
  };

  return Response;
};

export const CadastroDELETEResponse = (Data: any) => {
  const Response: ResponseType = {
    data: Data ? Data : {},
    sucesso: true,
    mensagem: `Exclusão Realizada com Sucesso`,
  };

  return Response;
};
