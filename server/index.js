import express from "express";
import dotenv from "dotenv";

import router from "./routes/todos.routes.js";
import connectDb from "./db.js";

dotenv.config();
import cors from "cors";
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
connectDb();
app.use("/api/todos", router);
app.listen(port, () => console.log(`port is : ${port}`));
