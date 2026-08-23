import { RequestOtpDto } from '@auth/dto/req-otp.dto';
import { SummaryUserDataDto } from '@auth/dto/summary-user-otp.dto';
import { VrifyOtpDto } from '@auth/dto/vrify-otp.dto';
import { User } from '@auth/entities/user.entity';
import { JwtPayload } from '@common/@types/jwt-payload.type';
import { Roles } from '@common/enums/role-app.enum';
import { CacheService } from '@common/services/cache.service';
import { generateOtp } from '@common/utils/code-generator.util';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtAuthService } from './jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly cacheService: CacheService,
    private jwtAuthService: JwtAuthService,
  ) {}

  async ReqOtp(ReqOtp: RequestOtpDto) {
    const phone = ReqOtp.phone;
    const isBlocked = await this.cacheService.get(`blocked_${phone}`);
    if (isBlocked) {
      throw new HttpException(
        'لطفاً ۲ دقیقه صبر کنید.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    const currentAttempts =
      (await this.cacheService.get(`otp_attempt_${phone}`)) || 0;
    const newAttempts = Number(currentAttempts) + 1;
    await this.cacheService.set(`otp_attempt_${phone}`, newAttempts, 120);

    if (newAttempts >= 3) {
      await this.cacheService.set(`blocked_${phone}`, true, 120);
      await this.cacheService.del(`otp_attempt_${phone}`);
      throw new HttpException(
        'تعداد درخواست بیش از حد شد.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    const code = generateOtp();
    await this.cacheService.set(`otp_code_${phone}`, code, 120);

    return {
      message: 'کد تایید ارسال شد',
      remainingAttempts: 3 - newAttempts,
      code,
    };
  }

  async VrifyOtp(vrifyOtpDto: VrifyOtpDto) {
    const phone = vrifyOtpDto.phone;
    const code = vrifyOtpDto.otp;

    if (!phone || !code)
      throw new BadRequestException('لطفا اطلاعات کامل ارسال کنید.');

    const isOtp = await this.cacheService.get(`otp_code_${phone}`);
    if (!isOtp) {
      throw new BadRequestException(
        'کد منقضی شده یا موجود نیست. دوباره درخواست کنید.',
      );
    }
    if (String(isOtp) !== String(code)) {
      const failedKey = `otp_failed_${phone}`;
      const failedAttempts = (await this.cacheService.get(failedKey)) || 0;
      const newFailedAttempts = Number(failedAttempts) + 1;
      await this.cacheService.set(failedKey, newFailedAttempts, 300);

      if (newFailedAttempts >= 3) {
        await this.cacheService.set(`blocked_${phone}`, true, 600);
        await this.cacheService.del(`otp_code_${phone}`);
        throw new BadRequestException(
          'تعداد تلاش ناموفق بیش از حد. ۱۰ دقیقه صبر کنید.',
        );
      }

      throw new BadRequestException(
        `کد وارد شده اشتباه است. ${3 - newFailedAttempts} تلاش باقی مانده.`,
      );
    }
    await Promise.all([
      this.cacheService.del(`otp_code_${phone}`),
      this.cacheService.del(`otp_failed_${phone}`),
    ]);
    let user = await this.userRepository.findOne({
      where: { phone },
    });

    const isNewUser = !user;
    if (!user) {
      user = this.userRepository.create({
        phone,
      });
      await this.userRepository.save(user);
    }

    const payload: JwtPayload = {
      sub: user.id,
      role: Roles.USER,
    };
    const tokens = await this.jwtAuthService.generateToken(payload);

    return {
      success: true,
      message: isNewUser ? 'ثبت نام موفق' : 'ورود موفق',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  Refresh() {
    return `This action returns a  auth`;
  }

  SummaryUser(SummaryUserDto: SummaryUserDataDto) {
    console.log(SummaryUserDto);
    return `This action updates a  auth`;
  }
}
