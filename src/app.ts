import express from "express";
import "express-async-errors";
import { json, urlencoded } from "body-parser";

import { errorHandler, NotFoundError } from "@auscheon/common";
import { deploymentRouter } from "./routes/deploymentRoutes";

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/deployments", deploymentRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
