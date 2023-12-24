import { AppDataSource } from "../data-source";
import { Card } from "../entities/Card.entity";
import { ICardData } from "../interfaces/cards.interface";

export async function createCardService(cardData: ICardData){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({name: cardData.name})

    if(card){
        throw new Error("Card already exists")
    }
    const newCard = cardRepository.create(cardData)
    await cardRepository.save(newCard)
    return newCard
}
export async function listCardService(){
    const cardRepository = AppDataSource.getRepository(Card)
    const cards = await cardRepository.find()
    if(!cards){
        throw new Error("No cards found")
    }
    return cards
}
export async function editCardService(id:string, cardData:ICardData){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({id: id})
    if(!card){
        throw new Error("Card not found")
    }
    await cardRepository.update(id, cardData)
    const newCard = {...card, ...cardData}
    return newCard
}
export async function deleteCardService(id:string){
    const cardRepository = AppDataSource.getRepository(Card)
    const card = await cardRepository.findOneBy({id: id})
    if(!card){
        throw new Error("Card not found")
    }
    await cardRepository.delete(id)
    return ('Card deleted succefull')

}