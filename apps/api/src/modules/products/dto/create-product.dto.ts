import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
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
  shortDescription: string;

  @IsString()
  slug: string;

  @IsString()
  mainImage: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNumber()
  @Min(0, { message: 'قیمت نمی‌تواند منفی باشد' })
  price: number;

  @IsNumber()
  @IsOptional()
  @Min(0, { message: 'درصد تخفیف نمی‌ تواند منفی باشد' })
  @Max(100, { message: 'درصد تخفیف حداکثر ۱۰۰ است' })
  discountPercent: number;

  @IsOptional()
  @IsInt()
  @Min(0, { message: 'موجودی نمی‌تواند منفی باشد' })
  stock?: number = 0;
}
