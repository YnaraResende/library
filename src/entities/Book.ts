import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Publisher } from "./Publisher";

@Entity()
export default class Book {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    author: string;
    @Column()
    isbn: number;
    @ManyToOne(() => Publisher, publisher => publisher.books)
    publisher: Publisher;


    constructor(title: string, author: string, isbn: number, publisher: Publisher){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publisher = publisher;
    }
}