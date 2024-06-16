import express, { Response } from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";

const app = express();
app.use(express.json());

router(app);

AppDataSource.initialize()
.then(() => {
  console.log("Database inicialized!");
}).catch((erro) => {
  console.log(erro);
});

app.get("/", (_, res: Response) => {
  res.send("Welcome to the Library!");
});


export default app;
