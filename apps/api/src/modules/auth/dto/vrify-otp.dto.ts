import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber, Length } from 'class-validator';

export class VrifyOtpDto {
  @ApiProperty({ example: '00000' })
  @Length(5, 5)
  otp: string;

  @ApiProperty({ example: '09924164032', required: false })
  @IsPhoneNumber('IR')
  @IsOptional()
  phone: string;
}
