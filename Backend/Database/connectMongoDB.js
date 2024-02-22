import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("DB connected successfully");
    });
  } catch (error) {
    console.log("something went wrong", error.message);
  }
};
export default connectMongoDB;
