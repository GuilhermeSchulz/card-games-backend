import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/tokenDecoder.middleware";
import { createDeckController, deleteDeckController, getAllDecksController, getSpecificDeckController, updateDeckController } from "../controllers/Deck.controller";

export const deckRouter = Router()


deckRouter.post('', verifyTokenMiddleware, createDeckController)
deckRouter.get('/all', verifyTokenMiddleware, getAllDecksController)
deckRouter.get('/:id', verifyTokenMiddleware, getSpecificDeckController)
deckRouter.patch('/:id', verifyTokenMiddleware, updateDeckController)
deckRouter.delete('/:id', verifyTokenMiddleware, deleteDeckController)