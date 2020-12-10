import mongoose from "mongoose";

interface DeploymentAttrs {
  url: string;
  templateName: string;
  version: string;
}

interface DeploymentDoc extends mongoose.Document {
  url: string;
  templateName: string;
  version: string;
  deployedAt?: string;
}

interface DeploymentModel extends mongoose.Model<DeploymentDoc> {
  build(attrs: DeploymentAttrs): DeploymentDoc;
}

const deploymentSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: "deployment url is required!",
    },
    templateName: {
      type: String,
      unique: "template name should be unique!",
      required: "name is required",
    },
    version: {
      type: String,
      required: "version no. is required",
    },
    deployedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

deploymentSchema.statics.build = (attrs: DeploymentAttrs) => {
  return new Deployment(attrs);
};

const Deployment = mongoose.model<DeploymentDoc, DeploymentModel>(
  "Deployment",
  deploymentSchema
);

export { Deployment };
