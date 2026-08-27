import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { UploadController } from './controllers/upload.controller';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { UploadService } from './services/upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductsController, UploadController, CategoriesController],
  providers: [ProductsService, UploadService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
