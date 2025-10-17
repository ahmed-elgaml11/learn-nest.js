import { MiddlewareConsumer, Module, NestModule,  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './products/product.controller';
import { ProductModule } from './products/product.module';
import { LoggerMiddleware } from './midllewares/logger.middleware';
import { ProductMiddleware } from './midllewares/products.middleware';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
