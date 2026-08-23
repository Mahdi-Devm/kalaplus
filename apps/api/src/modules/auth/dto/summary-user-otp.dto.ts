import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SummaryUserDataDto {
  @ApiProperty({ example: 'Mahdi' })
  @IsString()
  fullName: string;
}
