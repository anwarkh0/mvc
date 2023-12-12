import express from "express";

import cors from "cors";
import { connect, syncronise } from './db.js'

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());



app.listen(process.env.PORT, () => {
    setTimeout(connect, 7000);
    setTimeout(syncronise, 7000)
    console.log("conneted to the server", process.env.PORT)
})



