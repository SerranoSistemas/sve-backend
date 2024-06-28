import express from "express";
import path from "path";
import cors from "cors";
import { Middleware } from "../Lib/Utils";

const LocalesRouter = express.Router();

//Apply JSON parse
LocalesRouter.use(express.json());
LocalesRouter.use(Middleware);
// Use o middleware CORS
LocalesRouter.use(cors());

LocalesRouter.get("/:lng", (req, res) => {
  const { lng } = req.params;

  res.sendFile(path.join(__dirname, `../Locales/${lng}.json`));
});

export default LocalesRouter;
