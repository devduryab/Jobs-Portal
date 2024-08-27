// Imports all the modules
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { databaseConnection } from "./utils/database.js";


// config dotenv
config();

const app = express();

// testing Api
app.get('/', (req, res)=>{
  return res.status(200).json({
    message: 'hello, this is duryab from backend',
    success: true
  })
})



// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));



const port = process.env.PORT || process.env.BACKUP_PORT;
app.listen( port, () => {
  databaseConnection();
  if(port === process.env.BACKUP_PORT)
  {
    console.log(`Primary port is down, Server running on secondary port ${process.env.BACKUP_PORT}`);
  }
  else{
    console.log(`Server running on primary port ${process.env.PORT}`);
  }
});
