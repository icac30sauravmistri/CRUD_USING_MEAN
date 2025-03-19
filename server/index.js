import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { DB_CONNECT, PORT } from "./config/index.js";
import route from "./routes/user.js";

const app = express();

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(DB_CONNECT).then(() => {
    console.log("DB Connected successfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT} port`);
    })
}).catch(error => console.log(error));

app.use("/api", route);