import { Router } from "express";
import { createCardController, deleteCardController, editCardController, getAllCards } from "../controllers/Card.controller";


export const cardRouter = Router()


cardRouter.post('', createCardController)
cardRouter.get('', getAllCards)
cardRouter.patch('/:id', editCardController)
cardRouter.delete('/:id', deleteCardController)