import { RequestOtpDto } from '@auth/dto/req-otp.dto';
import { SummaryUserDataDto } from '@auth/dto/summary-user-otp.dto';
import { VrifyOtpDto } from '@auth/dto/vrify-otp.dto';
import {
  accessTokenExpireTimeByMilliSecond,
  accessTokenName,
  refreshTokenExpireTimeByMilliSecond,
  refreshTokenName,
} from '@common/constants/jwt.constants';
import { Cookie } from '@common/decorators/cookie.decorator';
import { setCookies } from '@common/utils/set-cookie';
import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('request-otp')
  ReqOtp(@Body() ReqOtpDto: RequestOtpDto) {
    return this.authService.ReqOtp(ReqOtpDto);
  }

  @Post('vrify-otp')
  async VrifyOtp(@Body() vrifyOtpDto: VrifyOtpDto, @Res() response: Response) {
    const tokens = await this.authService.VrifyOtp(vrifyOtpDto);

    setCookies(response, [
      {
        name: refreshTokenName,
        value: tokens.refreshToken,
        options: {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: refreshTokenExpireTimeByMilliSecond,
        },
      },
      {
        name: accessTokenName,
        value: tokens.accessToken,
        options: {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: accessTokenExpireTimeByMilliSecond,
        },
      },
    ]);

    response.json({ success: true });
  }

  @Post('refresh')
  async Refresh(
    @Cookie(refreshTokenName) token: string,
    @Res() response: Response,
  ) {
    const accessToken = await this.authService.Refresh(token);

    setCookies(response, [
      {
        name: accessTokenName,
        value: accessToken,
        options: {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: accessTokenExpireTimeByMilliSecond,
        },
      },
    ]);

    response.json({ success: true });
  }

  @Post('summary-user')
  SummaryUser(@Body() SummaryUserDto: SummaryUserDataDto) {
    return this.authService.SummaryUser(SummaryUserDto);
  }
}
