import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import { InjectQueue } from '@nestjs/bullmq';
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
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { Queue } from 'bullmq';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from '../services/upload.service';
@Controller('images')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    @InjectQueue('image-processing') private imageQueue: Queue,
  ) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'آپلود چند عکس محصول (حداکثر ۵ عدد)' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'array',
          items: { type: 'string', format: 'binary' },
        },
      },
    },
  })
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
              'فقط فایل‌ های تصویر مجاز هستند! (jpg, jpeg, png, gif, webp)',
            ),
            false,
          );
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
        files: 5,
      },
    }),
  )
  async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('هیچ عکسی آپلود نشده است');
    }

    const jobs = await Promise.all(
      files.map((file) =>
        this.imageQueue.add(
          'process-image',
          {
            path: file.path,
            filename: file.filename,
            originalName: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
          },
          {
            attempts: 3,
            backoff: { type: 'exponential', delay: 2000 },
            removeOnComplete: true,
            removeOnFail: false,
          },
        ),
      ),
    );

    return {
      message: 'عکس‌ ها دریافت شدند و در حال پردازش هستند',
      count: files.length,
      jobs: jobs.map((job) => ({
        jobId: job.id,
        filename: job.data.filename,
        status: 'queued',
      })),
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
