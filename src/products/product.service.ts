import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
@Injectable()
export class ProductService {
    constructor (private readonly productRepositry: ProductRepository){}
    add(){
        return this.productRepositry.getNumberInDb() + 1
    }
}