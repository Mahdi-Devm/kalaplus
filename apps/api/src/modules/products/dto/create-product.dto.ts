import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2, { message: 'عنوان حداقل باید ۲ کاراکتر باشد' })
  @MaxLength(30, { message: 'عنوان حداکثر باید ۳۰ کاراکتر باشد' })
  title: string;

  @IsString()
  categoryId: string;

  @IsString()
  description: string;

  @IsString()
  slug: string;

  @IsString()
  mainImage: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  discountPercent: number;

  @IsNumber()
  @IsOptional()
  discountPrice: number;
}
