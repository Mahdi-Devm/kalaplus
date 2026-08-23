import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './req-otp.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
