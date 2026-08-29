import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../types/order.type';

export class UpdateOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  trackingCode: string;
}
