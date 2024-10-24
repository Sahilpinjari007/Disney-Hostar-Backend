import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/disney+Hostar")
    .then(() => {
      console.log("Connected to Server db!...");
    })
    .catch((error) => {
      console.log("Unable to connect with Server db!...", error);
    });
};

export default connectDB;
