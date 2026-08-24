import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { UploadImage } from '../types/upload-img.type';

@Injectable()
export class UploadService {
  constructor() {
    this.ensureDirectory();
  }

  private async ensureDirectory() {
    const uploadDir = './uploads/products';
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }
  }

  async processProductImages(
    files: Express.Multer.File[],
  ): Promise<UploadImage[]> {
    if (!files || files.length === 0) {
      throw new BadRequestException('هیچ عکسی آپلود نشده است');
    }

    const imageUrls: UploadImage[] = [];

    for (const file of files) {
      imageUrls.push({
        url: `/uploads/products/${file.filename}`,
        size: file.size,
        mimeType: file.mimetype,
        originalName: file.originalname,
      });
    }

    return imageUrls;
  }

  async deleteProductImage(imageUrl: string): Promise<void> {
    try {
      const relativePath = imageUrl.replace(/^\//, '');
      const fullPath = path.join(process.cwd(), relativePath);

      await fs.unlink(fullPath);
    } catch (error) {
      throw new BadRequestException(`خطا در حذف عکس`);
    }
  }
}
