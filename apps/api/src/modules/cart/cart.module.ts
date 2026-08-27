import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '../products/products.module';
import { CartController } from './controllers/cart.controller';
import { Cart } from './entities/cart.entity';
import { CartService } from './services/cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), ProductsModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
