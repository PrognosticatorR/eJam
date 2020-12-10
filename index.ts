import { config } from "dotenv";
import { app } from "./src/app";
import mongoose from "mongoose";

config();

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("Mongo uri must be defined.");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to mongodb..");
  } catch (error) {
    console.error(error.message);
  }
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port 3000!!!");
  });
};

start();
