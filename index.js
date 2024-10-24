import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConnection.js";
import cors from "cors";


// db config
connectDB()
const app = express();


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: process.env.CORS_CREDENTIAL
}))


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser());


app.get("/", (req, res)=>{
  res.send('Bro it is Disney+ Hostar Backend Youp!...')
})


app.listen(5000, (err) => {

  if (err) {
    console.log("Something went wrong!...", err);
    return;
  }

  console.log(`app running on port ${process.env.PORT}!...`);
});
