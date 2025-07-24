import express, { Express } from "express";
import { PORT } from "./secrets";
import { appRouter } from "./routes/index.routes";

const app: Express = express();

app.use(express.json());

app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
