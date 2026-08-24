import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const isCategory = await this.categoryRepository.findOne({
      where: { slug: createCategoryDto.slug },
      relations: { products: true },
    });
    if (isCategory) {
      throw new BadRequestException('کتگوری تکراری هست.');
    }
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      order: { title: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: { products: true },
    });

    if (!category) {
      throw new NotFoundException('کتگوری پیدا نشد');
    }

    return category;
  }

  async findBySlug(slug: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { slug },
      relations: { products: true },
    });

    if (!category) {
      throw new NotFoundException('کتگوری پیدا نشد');
    }

    return category;
  }

  async update(
    id: string,
    updateData: Partial<CreateCategoryDto>,
  ): Promise<Category> {
    const category = await this.findOne(id);
    if (updateData.slug) {
      const existingCategory = await this.categoryRepository.findOne({
        where: { slug: updateData.slug },
      });

      if (existingCategory && existingCategory.id !== id) {
        throw new BadRequestException('این slug قبلاً استفاده شده است.');
      }
    }
    Object.assign(category, updateData);
    return await this.categoryRepository.save(category);
  }

  async remove(id: string): Promise<{ message: string }> {
    const category = await this.findOne(id);
    await this.categoryRepository.remove(category);
    return { message: 'کتگوری با موفقیت حذف شد.' };
  }
}
