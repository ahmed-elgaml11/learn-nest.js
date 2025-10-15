import { Injectable } from "@nestjs/common"

@Injectable()
export class ProductRepository {
    getNumberInDb(){
        const dataInDb = 1
        return dataInDb
    }
    
}