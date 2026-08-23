import { CacheService } from '@common/services/cache.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { User } from './entities/user.entity';
import { AuthService } from './services/auth.service';
import { JwtAuthService } from './services/jwt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, CacheService, JwtAuthService, JwtService],
})
export class AuthModule {}
