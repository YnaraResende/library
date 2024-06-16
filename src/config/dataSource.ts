import {DataSource} from "typeorm";
import Book from "../entities/Book";
import { Publisher } from "../entities/Publisher";

export const AppDataSource = new DataSource({
    type:"sqlite",
    database: "./src/config/database.sqlite",
    entities:[Book, Publisher],
    synchronize:true
});