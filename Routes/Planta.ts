import express, { Request, Response } from "express";
import { Plantas } from "../Data/Planta";
import { Filter, GetElementByID, GetList, GetResponse, PaginateAndSort } from "../Lib/Utils";
import { GetPagination } from "../Data/Pagination";
import {
  CadastroDELETEResponse,
  CadastroPOSTResponse,
  CadastroPUTResponse,
  GetElementByIDResponse,
} from "../Lib/Responses";

const DATA = Plantas;

const Router = express.Router();

Router.get("/", (REQ: Request, RES: Response) => {
  const Pagination = GetPagination(REQ);
  const Text = REQ.query?.text?.toString() || "";

  const FilteredData = Filter(Plantas, Text);

  const PaginatedData = PaginateAndSort(FilteredData, Pagination);
  const Response = GetResponse(PaginatedData);
  return RES.status(200).json(Response);
});

Router.get("/select", (REQ: Request, RES: Response) => {
  const Response = GetResponse(GetList(Plantas));
  return RES.status(200).json(Response);
});

Router.get("/:id", (REQ: Request, RES: Response) => {
  const data = GetElementByID(DATA, REQ.params.id);
  const Response = GetElementByIDResponse(data);
  RES.status(200).json(Response);
});

Router.put("/:id", (REQ: Request, RES: Response) => {
  const Response = CadastroPUTResponse(REQ.body);
  RES.status(200).json(Response);
});

Router.post("/", (REQ: Request, RES: Response) => {
  const Response = CadastroPOSTResponse(REQ.body);
  RES.status(200).json(Response);
});

Router.delete("/:id", (REQ: Request, RES: Response) => {
  const Response = CadastroDELETEResponse(REQ.body);
  RES.status(200).json(Response);
});

export { Router };

// Router.get("/firebase", async (REQ: Request, RES: Response) => {
//   try {
//     const Pagination = GetPagination(REQ);
//     const PlantaRef = db.collection("Plantas").where("descricao", ">=", "Teste").orderBy("descricao", "asc");

//     const docs = await PlantaRef.get();

//     const plantas: any[] = [];

//     docs.forEach((doc) => {
//       plantas.push({ uuid: doc.id, ...doc.data() });
//     });

//     return RES.status(200).json(plantas);
//   } catch (error) {
//     return RES.status(500).json({ error: "Erro ao buscar os dados" });
//   }
// });
