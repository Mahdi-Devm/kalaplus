import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class UploadService {
  constructor() {
    this.ensureDirectory();
  }

  private async ensureDirectory() {
    const dirs = ['./uploads/products', './uploads/products/processed'];
    for (const dir of dirs) {
      try {
        await fs.access(dir);
      } catch {
        await fs.mkdir(dir, { recursive: true });
      }
    }
  }

  async deleteProductImage(imageUrl: string): Promise<void> {
    try {
      const relativePath = imageUrl.replace(/^\//, '');
      const fullPath = path.join(process.cwd(), relativePath);
      await fs.unlink(fullPath);
    } catch (error) {
      throw new BadRequestException('خطا در حذف عکس');
    }
  }
}
