import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './products/product.controller';
import { ProductRepository } from './products/product.repository';
import { ProductService } from './products/product.service';
import { ProductModule } from './products/product.module';
import { LoggerMiddleware } from './midllewares/logger.middleware';
import { ProductMiddleware } from './midllewares/products.middleware';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductRepository, ProductService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(ProductMiddleware).forRoutes({ path: 'products', method: RequestMethod.GET });
  }
}
