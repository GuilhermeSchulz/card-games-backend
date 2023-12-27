import cors from "cors";
import express from "express";
import "express-async-errors";

import "reflect-metadata";

import { userRouter } from "./routes/User.routes";

import { io } from "./socket";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

export { app };
