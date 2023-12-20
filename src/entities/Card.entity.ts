import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Decks } from "./Deck.entity";


@Entity('Cards')
export class Card{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column()
    attack: number

    @Column()
    defense: number

    @Column()
    image: string

}