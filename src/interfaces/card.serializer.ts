import {z} from 'zod';

export const cardSerializer = z.object({
    name: z.string().max(50),
    attack: z.number(),
    defense: z.number(),
    image: z.string()
})
export const cardTOReturn = cardSerializer.extend({id: z.string()})