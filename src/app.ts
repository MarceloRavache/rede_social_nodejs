import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// configs

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

export default app;
