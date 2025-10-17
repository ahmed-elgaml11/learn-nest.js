import { BadRequestException, Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

const data = [
    {
        id: 1,
        name: 'product1'
    }, {
        id: 1,
        name: 'product1'

    }
]
@Injectable()
export class ProductService {
    constructor(private readonly productRepositry: ProductRepository) { }
    add() {
        try {
            return this.productRepositry.getNumberInDb() + 1

        }
        catch (err) {
            throw new BadRequestException('not dound')
        }
    }

    getOne(id: number){
        return data.find((product) => product.id === id) 
    }
}