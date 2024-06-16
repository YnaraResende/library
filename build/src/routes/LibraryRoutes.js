"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LibraryController_1 = require("../controller/LibraryController");
var LibraryRepository_1 = __importDefault(require("../repository/LibraryRepository"));
var dataSource_1 = require("../config/dataSource");
var PublisherRepository_1 = __importDefault(require("../repository/PublisherRepository"));
var route = express_1.default.Router();
var libraryController = new LibraryController_1.LibraryController(new LibraryRepository_1.default(dataSource_1.AppDataSource.getRepository("Book")), new PublisherRepository_1.default(dataSource_1.AppDataSource.getRepository("Publisher")));
route.post('/addBook', function (req, res) { return libraryController.addBook(req, res); });
route.get('/listBook', function (req, res) { return libraryController.listBooks(req, res); });
route.put('/editBook/:id', function (req, res) { return libraryController.editBookById(req, res); });
route.delete('/deleteBook/:id', function (req, res) { return libraryController.deleteBookById(req, res); });
exports.default = route;
