// Imports all the modules
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { databaseConnection } from "./utils/database.js";
import userRouter from "./routes/user.route.js"
import companyRouter from "./routes/company.router.js"
import jobRouter from "./routes/job.route.js"
// import bodyParser from "body-parser";

// config dotenv
config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// API'S

app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);  
app.use("/api/v1/job", jobRouter)


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


