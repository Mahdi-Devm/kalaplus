import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  ReqOtp() {
    return 'This action adds a new auth';
  }

  VrifyOtp() {
    return `This action returns all auth`;
  }

  Refresh() {
    return `This action returns a  auth`;
  }

  SummaryUser() {
    return `This action updates a  auth`;
  }
}
