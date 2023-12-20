import { hashSync } from "bcryptjs";
import { Decks } from "./Deck.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @CreateDateColumn()
    createdAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
    @OneToMany(() => Decks, (decks)=> decks.user)
    decks: Decks[]
}