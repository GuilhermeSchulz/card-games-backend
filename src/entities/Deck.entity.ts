import { User } from "./User.entity";
import { Card } from "./Card.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, Column, JoinTable } from "typeorm";

@Entity("deck")
export class Decks {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ length: 50 })
    name: string
    @ManyToOne(() => User, (user) => user.decks)
    user: User
    @ManyToMany(() => Card)
    @JoinTable()
    card:Card[]
}