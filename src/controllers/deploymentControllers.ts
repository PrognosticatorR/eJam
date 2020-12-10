import { Request, Response } from "express";
import { Deployment } from "../models/deployment";
import { BadRequestError } from "@auscheon/common";
import { isValidObjectId } from "mongoose";

const addDeployment = async (req: Request, res: Response) => {
  try {
    const { templateName, url, version } = req.body;
    const deployment = Deployment.build({ templateName, url, version });
    await deployment.save();
    res.status(201).send(deployment);
  } catch (error) {
    res.status(500).send([{ message: error.message }]);
  }
};

const deleteDeployment = async (req: Request, res: Response) => {
  try {
    if (!isValidObjectId(req.params.id))
      throw new BadRequestError("invalid id param");
    const deployment = await Deployment.findByIdAndDelete(req.params.id);
    res.status(200).send(deployment);
  } catch (error) {
    res.status(500).send([{ message: error.message }]);
  }
};

const getAllDeployments = async (req: Request, res: Response) => {
  try {
    const results = await Deployment.find({});
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send([{ message: error.message }]);
  }
};

export { addDeployment, deleteDeployment, getAllDeployments };
