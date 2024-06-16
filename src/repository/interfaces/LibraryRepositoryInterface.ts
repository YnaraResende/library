import Book from "../../entities/Book";

export default interface LibraryRepositoryInterface{
    addBook(book: Book):void;

    listBooks(): Array<Book> | Promise<Book[]>;

    editBook(id: number, data: Book): Promise<{ success: boolean; message?: string }> | void;

    deleteBook(id: number): Promise<{ success: boolean; message?: string }> | void;
}