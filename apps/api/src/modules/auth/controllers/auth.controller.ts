import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('request-otp')
  ReqOtp() {
    return this.authService.ReqOtp();
  }

  @Post('vrify-otp')
  VrifyOtp() {
    return this.authService.VrifyOtp();
  }

  @Post('refresh')
  Refresh() {
    return this.authService.Refresh();
  }

  @Post('summary-user')
  SummaryUser() {
    return this.authService.SummaryUser();
  }
}
