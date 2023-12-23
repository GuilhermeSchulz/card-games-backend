import cors from "cors";
import express from "express";
import "express-async-errors";
import { createServer } from "http";
import "reflect-metadata";
import { Server } from "socket.io";
import { userRouter } from "./routes/User.routes";
const corsOptions = {
  origin: "*",
};

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
const http = createServer();
const io = new Server(http, { cors: corsOptions });

io.on("connection", function (socket) {
  console.log("socket connected");
  const rooms = ["room1", "room2"];
  socket.on("create-match", (arg, callback) => {
    console.log(arg);
    callback(rooms);
    socket.emit("judas", time, (data: any) => {
      console.log(data);
      return "judas";
    });
  });
  let time = 30;
});

export { app, http };
