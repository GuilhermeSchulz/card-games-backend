import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


export default app;
