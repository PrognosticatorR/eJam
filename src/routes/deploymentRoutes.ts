import express from "express";
import { validateRequest } from "@auscheon/common";
import { addDeploymentValidation } from "../validators/deploymentValidator";
import {
  addDeployment,
  getAllDeployments,
  deleteDeployment,
} from "../controllers/deploymentControllers";

const router = express.Router();

router.post("/", addDeploymentValidation, validateRequest, addDeployment);
router.get("/", getAllDeployments);
router.delete("/:id", deleteDeployment);

export { router as deploymentRouter };
