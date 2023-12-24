import { Request, Response } from "express";
import { createDeck, deleteDeck, getAllDecks, getDeck, updateDeck } from "../service/Deck.service";



export async function createDeckController(req: Request, res: Response) {
    const deckData = req.body;
    const id = req.user.id
    const deck =await createDeck(id, deckData)
    return res.status(201).json(deck)
}
export async function getSpecificDeckController(req: Request, res: Response) {
    const deckId = req.params.id
    const deck = await getDeck(deckId)
    return res.status(200).json(deck)
}
export async function getAllDecksController(req: Request, res: Response) {
    const userId = req.user.id
    console.log(userId)
    const decks = await getAllDecks(userId)
    return res.status(200).json(decks)
}
export async function updateDeckController(req: Request, res: Response) {
    const deckId = req.params.id
    const userId = req.user.id
    const deck = await updateDeck(userId, deckId, req.body)
    return res.status(200).json(deck)
}
export async function deleteDeckController(req: Request, res: Response) {
    const deckId = req.params.id
    const deck = await deleteDeck(deckId)
    return res.status(200).json(deck)
}