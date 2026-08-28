import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import * as fs from 'fs/promises';
import * as path from 'path';

@Processor('image-processing')
export class ImageProcessor extends WorkerHost {
  private readonly logger = new Logger(ImageProcessor.name);

  async process(job: Job): Promise<any> {
    const { path: filePath, filename, originalName, mimetype, size } = job.data;

    this.logger.log(`شروع پردازش: ${originalName}`);

    try {
      const processedDir = './uploads/products/processed';
      await fs.mkdir(processedDir, { recursive: true });

      const outputPath = path.join(processedDir, filename);

      await fs.rename(filePath, outputPath);

      this.logger.log(`پردازش تمام شد: ${filename}`);

      return {
        url: `/uploads/products/processed/${filename}`,
        originalName,
        mimetype,
        size,
        status: 'completed',
      };
    } catch (error) {
      this.logger.error(`خطا در پردازش ${originalName}:`, error);
      throw error;
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} completed successfully`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, error: Error) {
    this.logger.error(`Job ${job.id} failed: ${error.message}`);
  }
}
