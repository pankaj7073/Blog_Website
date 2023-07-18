import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  const URL = `mongodb+srv://pv516712:pankaj9468@cluster0.ifqocod.mongodb.net/Blog_Users?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
