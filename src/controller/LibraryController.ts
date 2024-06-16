import { Request, Response } from "express";
import Book from "../entities/Book";
import { Repository } from "typeorm";
import LibraryRepository from "../repository/LibraryRepository";
import { Publisher } from "../entities/Publisher";
import PublisherRepository from "../repository/PublisherRepository";

let books : Book[] = [];

export class LibraryController {

    constructor(private repository: LibraryRepository, private publisherRepository: PublisherRepository){}

    async addBook(req: Request, res: Response){
        const {id, title, author, isbn, publisher} = <Book> req.body;
        
        let publisherRelated = await this.publisherRepository.findOrCreate(publisher.name);
    
        const newBook = new Book(title, author, isbn, publisherRelated);
    
        this.repository.addBook(newBook);
        
        return res.status(201).json(newBook);

    }

    async listBooks(req: Request, res: Response){
        const books = await this.repository.listBooks();
        return res.status(200).json(books);

    }


    async deleteBookById(req: Request, res: Response) {
        const idToDelete = req.params.id;
        const { success, message } = await this.repository.deleteBook(Number(idToDelete));
    
        if(!success){
            return res.status(400).json("Error to delete book!");
        }

        return res.status(204).json("Book deleted succefully!");
    }

    async editBookById(req:Request, res: Response) {
        const idToEdit = req.params.id;
        const { success, message } = await this.repository.editBook(Number(idToEdit), req.body as Book);
        
        if (!success) {
            return res.status(400).json("Error to edit book!");
        }
        return res.status(204).json("Book updated succefully!");

    }

}