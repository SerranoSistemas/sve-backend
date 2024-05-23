import express, { Request, Response } from "express";
import { Plantas } from "./Data/Planta";

const app = express();
app.use(express.json());

// get post routes
app.get("/post", (req: Request, res: Response) => {
  res.status(200).json({ message: "post routes" });
});

// root routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

// root routes
app.get("/planta", (req: Request, res: Response) => {
  res.status(200).json(Plantas);
});

app.listen(3000, () => console.log("Server is running on port 3000"));

export default app;
