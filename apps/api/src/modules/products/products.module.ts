import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountController } from './controllers/discount.controller';
import { ProductsController } from './controllers/products.controller';
import { UploadController } from './controllers/upload.controller';
import { Product } from './entities/product.entity';
import { ProductsService } from './services/products.service';
import { UploadService } from './services/upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, UploadController, DiscountController],
  providers: [ProductsService, UploadService],
})
export class ProductsModule {}
