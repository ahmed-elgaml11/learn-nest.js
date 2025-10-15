import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor (private readonly productServise: ProductService ){}
    @Get()
    GetAll(): string{
        return 'all products..'
    }
    @Get('calc')
    calc(){
        return this.productServise.add
    }

}