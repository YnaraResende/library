import express from "express";
import { LibraryController } from "../controller/LibraryController";
import LibraryRepository from "../repository/LibraryRepository";
import { AppDataSource } from "../config/dataSource";
import PublisherRepository from "../repository/PublisherRepository";

let route = express.Router();

let libraryController = new LibraryController(new LibraryRepository(AppDataSource.getRepository("Book")), 
        new PublisherRepository(AppDataSource.getRepository("Publisher")));

route.post('/addBook', (req, res) => libraryController.addBook(req, res));
route.get('/listBook',(req, res) =>  libraryController.listBooks(req, res));
route.put('/editBook/:id', (req, res) => libraryController.editBookById(req, res));
route.delete('/deleteBook/:id', (req, res) => libraryController.deleteBookById(req, res));

export default route;