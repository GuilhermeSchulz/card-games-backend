import {z} from 'zod'
import { cardSerializer } from './card.serializer'
import { deckToReturn } from './decks.serializer'


export const userWithoutPasswordSerializer = z.object({
    name: z.string().max(50),
    email: z.string().email().max(50),
    createdAt: z.date(),
    decks: z.array(deckToReturn)
})
export const userSerializer = userWithoutPasswordSerializer.extend({id: z.string()})

export const userWithoutDecks = z.object({
    id: z.string(),
    name: z.string().max(50),
    email: z.string().email().max(50),
    createdAt: z.date(),
})