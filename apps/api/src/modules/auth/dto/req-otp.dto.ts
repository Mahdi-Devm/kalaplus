import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'class-validator';

export class RequestOtpDto {
  @ApiProperty({ example: '09924164032', required: false })
  @IsPhoneNumber('IR')
  phone: string;
}
