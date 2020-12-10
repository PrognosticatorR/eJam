import { body } from "express-validator";
const addDeploymentValidation = [
  body("templateName")
    .notEmpty()
    .withMessage("templateName is required!")
    .isAlphanumeric(),
  body("url").notEmpty().withMessage("url string is required!").isURL(),
  body("version").notEmpty().withMessage("version is required!").isSemVer(),
];

export { addDeploymentValidation };
