import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/tokenDecoder.middleware";
import { createDeckController, deleteDeckController, getSpecificDeckController, updateDeckController } from "../controllers/Deck.controller";
import { getAllDecks } from "../service/Deck.service";

export const deckRouter = Router()


deckRouter.post('', verifyTokenMiddleware, createDeckController)
deckRouter.get('', verifyTokenMiddleware, getAllDecks)
deckRouter.get('/:id', verifyTokenMiddleware, getSpecificDeckController)
deckRouter.patch('/:id', verifyTokenMiddleware, updateDeckController)
deckRouter.delete('/:id', verifyTokenMiddleware, deleteDeckController)