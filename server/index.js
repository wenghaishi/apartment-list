import mongoose from "mongoose";

export default async (_nitroApp) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log('connected to mongodb')
  } catch (error) {
    console.log(error)
  }
};
