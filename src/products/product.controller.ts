import { Controller, Get, Param, ParseIntPipe, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./product.service";
import { AuthGuard } from "src/guards/auth.guard";
import { LoggingInterceptor } from "src/interceotors/logging.interceptor";
import { User } from "src/decorators/user.decorator";

@Controller('products')
export class ProductController {
    constructor(private readonly productServise: ProductService) { }
    
    @UseGuards(AuthGuard)
    @(UseInterceptors(LoggingInterceptor))
    @Get()
    findAll(
        @Query('limit', ParseIntPipe) limit: number,
        @User() user: any 
    ): string {
        console.log(user, limit)
        return 'all products..'
    }
    @Get('calc')
    calc() {
        return this.productServise.add()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        console.log(id)
        return this.productServise.getOne(id)
    }

}