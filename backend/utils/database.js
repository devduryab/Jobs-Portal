import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("db connection established");
    
  } catch (error) {
    console.log(error);
  }
};
