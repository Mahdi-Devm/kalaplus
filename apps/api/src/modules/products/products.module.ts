import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from '../upload/upload.module';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category]), UploadModule],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
