import cors from "cors";
import express from "express";
import "express-async-errors";

import "reflect-metadata";

import { cardRouter } from "./routes/Card.routes";
import { deckRouter } from "./routes/Deck.routes";
import { userRouter } from "./routes/User.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/cards", cardRouter);
app.use("/deck", deckRouter);

export { app };
