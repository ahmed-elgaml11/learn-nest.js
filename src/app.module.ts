import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './products/product.controller';
import { ProductRepository } from './products/product.repository';
import { ProductService } from './products/product.service';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductRepository, ProductService],
})
export class AppModule { }
