import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { errorHandler, NotFoundError } from "@auscheon/common";
import { deploymentRouter } from "./routes/deploymentRoutes";
import path from "path";

const app = express();

app.set("trust proxy", true);

app.use(json());
app.use("/api/deployments", deploymentRouter);

app.all("/api/*", async () => {
  throw new NotFoundError();
});

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
);

app.use(errorHandler);

export { app };
