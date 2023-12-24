import { AppDataSource } from "../data-source";
import { Card } from "../entities/Card.entity";
import { AppError } from "../error/AppError";
import { ICardData } from "../interfaces/cards.interface";

export async function createCardService(cardData: ICardData){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({name: cardData.name})

    if(card){
        throw new AppError("Card already exists", 400)
    }
    const newCard = cardRepository.create(cardData)
    await cardRepository.save(newCard)
    return newCard
}
export async function listCardService(){
    const cardRepository = AppDataSource.getRepository(Card)
    const cards = await cardRepository.find()
    if(!cards){
        throw new AppError("No cards found", 404)
    }
    return cards
}
export async function editCardService(id:string, cardData:ICardData){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({id: id})
    if(!card){
        throw new AppError("Card not found", 404)
    }
    await cardRepository.update(id, cardData)
    const newCard = {...card, ...cardData}
    return newCard
}
export async function deleteCardService(id:string){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({id: id})
    if(!card){
        throw new AppError("Card not found",404)
    }
    await cardRepository.delete(id)
    return ('Card deleted succefull')

}