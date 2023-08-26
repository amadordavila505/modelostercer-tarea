import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,ProductImage])],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductsModule {}
