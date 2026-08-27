import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateCartDto {
  @IsString()
  productId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number = 1;
}
