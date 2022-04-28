import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes/taskmern.routes.js";
import connectDb from "./db.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

// use cookie parser to send and read cookies
app.use(cookieParser());

// parse data as json
app.use(express.json());

// allow cross origin requests
app.use(cors());

// connect to database
connectDb();
app.use("/api/taskmern", router);
app.listen(port, () => console.log(`listening on port number : ${port}`));
