import express from "express";
import path from "path";
import cors from "cors";
import { Middleware } from "../Lib/Utils";

const Router = express.Router();

//Apply JSON parse
Router.use(express.json());
//Apply Middleware
Router.use(Middleware);
// Use o middleware CORS
Router.use(cors());

Router.get("/:lng", (req, res) => {
  const { lng } = req.params;

  res.sendFile(path.join(__dirname, `../Locales/${lng}.json`));
});

export { Router };
