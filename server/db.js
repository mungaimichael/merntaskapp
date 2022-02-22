import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`connected to ${conn.connection.host}`);
  } catch (err) {
    console.log("error");
  }
};
export default connectDb;
