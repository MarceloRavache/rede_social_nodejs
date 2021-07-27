import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import Users from "./routes/User.routes";

// configs

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes

app.use(Users);

export default app;
