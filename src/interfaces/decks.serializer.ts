import {z} from 'zod';
import { userWithoutPasswordSerializer } from './user.serializer';
import { cardTOReturn } from './card.serializer';

export const deckToReturn = z.object({
    user: userWithoutPasswordSerializer,
    id: z.string(),
    cards: z.array(cardTOReturn),
})