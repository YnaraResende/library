import { Repository } from "typeorm";
import Book from "../entities/Book";
import LibraryRepositoryInterface from "./interfaces/LibraryRepositoryInterface";

export default class LibraryRepository implements LibraryRepositoryInterface{

    private repository: Repository<Book>;

    constructor(repository: Repository<Book>){
        this.repository = repository;
    }

    addBook(book: Book): void {
        this.repository.save(book);
    }

    async listBooks(): Promise<Book[]> {
       return await this.repository.find({ relations: ["publisher"] });
    }

    async editBook(id: number, data: Book): Promise<{ success: boolean; message?: string }> {
        try{
            const bookToEdit = await this.repository.findOne({where : { id }});
            if(!bookToEdit){
                return { success: false, message: "Book not found!" };
            }

            Object.assign(bookToEdit, data);

            this.repository.save(bookToEdit);

            return {success: true};
        }catch (error){
            console.log(error);
            return{
                success: false,
                message: "Error to edit book!",
            };
        }
    }


    async deleteBook(id: number): Promise<{ success: boolean; message?: string }> {
        try{
            const bookToDelete = await this.repository.findOne({where : { id }});
            if(!bookToDelete){
                return { success: false, message: "Book not found!" };
            }
            await this.repository.remove(bookToDelete);
            
            return { success: true };

        }catch(error){
            return {success: false, message: "Error to delete book!"};
        }
    }
    
}