import { RequestOtpDto } from '@auth/dto/req-otp.dto';
import { SummaryUserDataDto } from '@auth/dto/summary-user-otp.dto';
import { VrifyOtpDto } from '@auth/dto/vrify-otp.dto';
import { User } from '@auth/entities/user.entity';
import { CacheService } from '@common/services/cache.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly cacheService: CacheService,
  ) {}

  ReqOtp(ReqOtp: RequestOtpDto) {
    console.log(ReqOtp);
    return 'This action adds a new auth';
  }

  VrifyOtp(vrifyOtpDto: VrifyOtpDto) {
    console.log(vrifyOtpDto);

    return `This action returns all auth`;
  }

  Refresh() {
    return `This action returns a  auth`;
  }

  SummaryUser(SummaryUserDto: SummaryUserDataDto) {
    console.log(SummaryUserDto);
    return `This action updates a  auth`;
  }
}
