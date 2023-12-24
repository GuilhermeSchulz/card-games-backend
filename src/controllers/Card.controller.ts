import { Request, Response } from "express";
import { ICardData } from "../interfaces/cards.interface";
import { createCardService, deleteCardService, editCardService, listCardService } from "../service/Card.service";


export async function createCardController(req: Request, res: Response){
    const cardData:ICardData = req.body
    const card = await createCardService(cardData)
    return res.status(201).json(card)
}
export async function getAllCards(req: Request, res: Response){
    const cards = await listCardService()
    return res.status(200).json(cards)
}
export async function editCardController(req: Request, res: Response){
    const cardData:ICardData = req.body
    const cardId = req.params.id
    const card = await editCardService(cardId, cardData)
    return res.status(201).json(card)
}
export async function deleteCardController(req: Request, res: Response){
    const cardId = req.params.id
    const card = await deleteCardService(cardId)
    return res.status(204).json(card)

}