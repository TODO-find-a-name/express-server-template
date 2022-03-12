import express, { Application } from "express";
import morgan from "morgan";

import Router from "./routes";
import setupSwaggerUi from "./utils/swagger";
import { getMandatoryEnvInt } from "./utils/env";

const PORT: number = getMandatoryEnvInt("PORT");

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

setupSwaggerUi(app);

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
