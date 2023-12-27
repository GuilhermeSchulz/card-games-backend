import { Router } from "express";
import { createCardController, deleteCardController, editCardController, getAllCards } from "../controllers/Card.controller";
import { verifyTokenMiddleware } from "../middlewares/tokenDecoder.middleware";


export const cardRouter = Router()


cardRouter.post('',verifyTokenMiddleware, createCardController)
cardRouter.get('',verifyTokenMiddleware, getAllCards)
cardRouter.patch('/:id',verifyTokenMiddleware, editCardController)
cardRouter.delete('/:id',verifyTokenMiddleware, deleteCardController)