import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import Users from "./routes/User.routes";
import Posts from "./routes/Post.routes";
import Likes from "./routes/Like.routes";
import Comments from "./routes/Comment.routes";

import Authentication from "./routes/Authentication.routes";

// configs

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes

app.use(Users);
app.use(Posts);
app.use(Likes);
app.use(Comments);
app.use(Authentication);

export default app;
