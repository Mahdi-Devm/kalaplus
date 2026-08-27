import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import {
  BadRequestException,
  Controller,
  Delete,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from '../services/upload.service';

@ApiTags('Upload Product Images')
@ApiBearerAuth()
@Controller('upload/products')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('images')
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  @ApiOperation({
    summary: 'آپلود عکس محصول',
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/products',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `product-${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedTypes = /\.(jpg|jpeg|png|gif|webp)$/i;
        if (!allowedTypes.test(file.originalname)) {
          return callback(
            new BadRequestException(
              'فقط فایل‌های تصویر مجاز هستند! (jpg, jpeg, png, gif, webp)',
            ),
            false,
          );
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
        files: 10,
      },
    }),
  )
  async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('هیچ عکسی آپلود نشده است');
    }

    const imageUrls = await this.uploadService.processProductImages(files);

    return {
      message: 'Images uploaded successfully',
      images: imageUrls,
      count: imageUrls.length,
    };
  }

  @Delete('image')
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  @ApiOperation({
    summary: 'حذف عکس محصول',
    description: 'یک عکس را از سرور حذف می‌کند.',
  })
  async deleteImage(@Query('url') imageUrl: string) {
    await this.uploadService.deleteProductImage(imageUrl);
    return {
      message: 'Image deleted successfully',
      url: imageUrl,
    };
  }
}
