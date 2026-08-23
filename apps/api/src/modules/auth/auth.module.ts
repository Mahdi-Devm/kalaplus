import { CacheService } from '@common/services/cache.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { User } from './entities/user.entity';
import { AuthService } from './services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, CacheService],
})
export class AuthModule {}
