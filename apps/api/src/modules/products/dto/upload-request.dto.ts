import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UploadRequestDto {
  @ApiProperty({
    description: 'فایل‌های تصویر (حداکثر ۱۰ عدد)',
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  images: Express.Multer.File[];

  @ApiPropertyOptional({
    description: 'شناسه محصول (برای اضافه کردن به محصول موجود)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  @IsOptional()
  productId?: string;

  @ApiPropertyOptional({
    description: 'نوع آپلود (product, user, category)',
    enum: ['product', 'user', 'category'],
    default: 'product',
  })
  @IsString()
  @IsOptional()
  uploadType?: 'product' | 'user' | 'category';
}
