import { RequestOtpDto } from '@auth/dto/req-otp.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { VrifyOtpDto } from '@auth/dto/vrify-otp.dto';
import { SummaryUserDataDto } from '@auth/dto/summary-user-otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('request-otp')
  ReqOtp(@Body() ReqOtpDto: RequestOtpDto) {
    return this.authService.ReqOtp(ReqOtpDto);
  }

  @Post('vrify-otp')
  VrifyOtp(@Body() vrifyOtpDto: VrifyOtpDto) {
    return this.authService.VrifyOtp(vrifyOtpDto);
  }

  @Post('refresh')
  Refresh() {
    return this.authService.Refresh();
  }

  @Post('summary-user')
  SummaryUser(@Body() SummaryUserDto: SummaryUserDataDto) {
    return this.authService.SummaryUser(SummaryUserDto);
  }
}
