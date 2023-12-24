import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./routes/User.routes";
import { createServer } from "http";
import { Server } from "socket.io";
import { cardRouter } from "./routes/Card.routes";
import { deckRouter } from "./routes/Deck.routes";
const corsOptions = {
    origin: '*'
  }


const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRouter)
app.use('/cards', cardRouter)
app.use('/deck', deckRouter)
const http = createServer();
const io = new Server(http, {cors: corsOptions});

io.on("connection", function(socket) {
    console.log("socket connected");
    io.emit("user connected");
});

export {app, http};
