import { Request, Response } from "express";
import { createDeck } from "../service/Deck.service";



export async function createDeckController(req: Request, res: Response) {
    const deckData = req.body;
    const id = req.user.id
    const deck = createDeck(id, deckData)
    return res.status(201).json(deck)
}