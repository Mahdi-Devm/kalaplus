import { AppCacheModule } from '@common/modules/cache.module';
import { RedisModule } from '@common/modules/redis.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfig }),
    RedisModule.forRootAsync(),
    AppCacheModule,
    AuthModule,
    ProductsModule,
    OrderModule,
  ],
})
export class AppModule {}
