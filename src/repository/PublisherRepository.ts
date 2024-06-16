import { Repository } from "typeorm";
import { Publisher } from "../entities/Publisher";


export default class PublisherRepository {
    
    private repository: Repository<Publisher>;

    constructor(repository: Repository<Publisher>){
        this.repository = repository;
    }

    async findOrCreate(name: string): Promise<Publisher>{
        let publisher = await this.repository.findOne({ where: { name } });
        if (!publisher) {
            publisher = new Publisher(name);
            publisher = await this.repository.save(publisher);
        }
        return publisher;
    }

}