import {z} from 'zod'
import { cardSerializer } from './card.serializer'


export const userWithoutPasswordSerializer = z.object({
    name: z.string().max(50),
    email: z.string().email().max(50),
    createdAt: z.date(),
    decks: z.array(cardSerializer)
})