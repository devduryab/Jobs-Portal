import express from "express";
import { config } from "dotenv"

const app = express();
config();
app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
})