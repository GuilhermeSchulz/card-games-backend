import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/tokenDecoder.middleware";
import { createDeckController } from "../controllers/Deck.controller";

export const deckRouter = Router()


deckRouter.post('', verifyTokenMiddleware, createDeckController)