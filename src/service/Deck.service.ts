import { AppDataSource } from "../data-source";
import { Card } from "../entities/Card.entity";
import { Decks } from "../entities/Deck.entity";
import { User } from "../entities/User.entity";
import { AppError } from "../error/AppError";
import { IDecks } from "../interfaces/decks.interface";
import { deckToReturn } from "../interfaces/decks.serializer";


export async function createDeck(userId:string, deckData:IDecks) {
    const deckRepository = AppDataSource.getRepository(Decks)
    const cardRepository = AppDataSource.getRepository(Card)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})
    if(!user){
        throw new AppError("User not found",404)
    }
    const cards = await cardRepository.find()
    const cardInfos = deckData.cards.map(card => {
        const cardFilter = cards.find(cardF => cardF.id === card);
        return cardFilter;
    });
    
    
    const deck = deckRepository.create({
        name: deckData.name,
        user: user,
        card: cardInfos
    });
    const test = await deckRepository.save(deck);
    const objectToReturn = {
        id: test.id,
        user:{...test.user},
        cards:[...test.card.map(card => {return {...card}})]
    }
    const foundDeck = await deckRepository.findOne({where:{ id: deck.id},relations:{user:true,card:true}})

    return foundDeck
}
export async function getDeck(deckId:string) {
    const deckRepository = AppDataSource.getRepository(Decks)
    const foundDeck = await deckRepository.findOne({where:{ id: deckId},relations:{user:true,card:true}})
    if(!foundDeck){
        throw new AppError("Deck not found",404)
    }
    return foundDeck
}
export async function getAllDecks(userId: string) {
    const deckRepository = AppDataSource.getRepository(Decks)
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: userId})
    const foundDecks = await deckRepository.find({where: {user:{
        id:user.id
    } }, relations:{user:true,card:true}})
    return foundDecks
}
export async function deleteDeck(deckId:string) {
    const deckRepository = AppDataSource.getRepository(Decks)
    const foundDeck = await deckRepository.findOneBy({id: deckId})
    if(!foundDeck){
        throw new AppError("Deck not found",404)
    }
    await deckRepository.delete(deckId)
    return {message: 'Deleted Deck'}
}
export async function updateDeck(userId: string, deckId:string, deckData:IDecks) {
    const deckRepository = AppDataSource.getRepository(Decks)
    const cardRepository = AppDataSource.getRepository(Card)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})
    if(!user){
        throw new AppError("User not found",404)
    }
    const cards = await cardRepository.find()
    const cardInfos = deckData.cards.map(card => {
        const cardFilter = cards.find(cardF => cardF.id === card);
        return cardFilter;
    });
    
    
    const deck = deckRepository.create({
        name: deckData.name,
        user: user,
        card: cardInfos
    });
    const test = await deckRepository.save(deck);
    const objectToReturn = {
        id: test.id,
        user:{...test.user},
        cards:[...test.card.map(card => {return {...card}})]
    }
    const foundDeck = await deckRepository.findOne({where:{ id: deck.id}, relations:{user:true,card:true}})
    return foundDeck
}