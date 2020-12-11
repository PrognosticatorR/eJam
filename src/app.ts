import express from "express";
import "express-async-errors";
import * as cors from "cors";
import { json } from "body-parser";

import { errorHandler, NotFoundError } from "@auscheon/common";
import { deploymentRouter } from "./routes/deploymentRoutes";

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use("/api/deployments", deploymentRouter);

app.all("/api/*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
