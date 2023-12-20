import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const corsOptions = {
    origin: '*'

  }


const app = express();
app.use(express.json());
app.use(cors());

const http = createServer();
const io = new Server(http, {cors: corsOptions});

io.on("connection", function(socket) {
    console.log("socket connected");
    io.emit("user connected");
});

export {app, http};
