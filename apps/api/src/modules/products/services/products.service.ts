import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  paginate,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const { slug } = createProductDto;
    const isProduct = await this.productRepository.findOne({
      where: { slug },
    });
    if (isProduct) {
      throw new BadRequestException('محصول تکراری هست.');
    }
    const Createproduct = await this.productRepository.create(createProductDto);
    this.productRepository.save(Createproduct);

    return {
      message: 'محصول با موفقیت ایجاد شد.',
      id: Createproduct.id,
    };
  }

  listForAdmin(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(query, this.productRepository, {
      sortableColumns: ['createdAt', 'price', 'title', 'discountPercent'],
      defaultSortBy: [['createdAt', 'DESC']],

      searchableColumns: ['title', 'shortDescription', 'slug'],

      filterableColumns: {
        categoryId: [FilterOperator.EQ],
        price: [
          FilterOperator.EQ,
          FilterOperator.GT,
          FilterOperator.GTE,
          FilterOperator.LT,
          FilterOperator.LTE,
        ],
        discountPercent: [
          FilterOperator.EQ,
          FilterOperator.GT,
          FilterOperator.GTE,
          FilterOperator.LT,
          FilterOperator.LTE,
        ],
      },
    });
  }
  listForUser(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(query, this.productRepository, {
      sortableColumns: ['createdAt', 'price', 'title', 'discountPercent'],
      defaultSortBy: [['createdAt', 'DESC']],

      searchableColumns: ['title', 'shortDescription', 'slug'],

      filterableColumns: {
        categoryId: [FilterOperator.EQ],
        price: [
          FilterOperator.EQ,
          FilterOperator.GT,
          FilterOperator.GTE,
          FilterOperator.LT,
          FilterOperator.LTE,
        ],
        discountPercent: [
          FilterOperator.EQ,
          FilterOperator.GT,
          FilterOperator.GTE,
          FilterOperator.LT,
          FilterOperator.LTE,
        ],
      },
    });
  }

  async findOne(id: string) {
    const isProduct = await this.productRepository.findOne({
      where: { id },
    });
    if (!isProduct) {
      throw new BadRequestException('محصول یافت نشد');
    }
    return { isProduct };
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const { isProduct } = await this.findOne(id);

    Object.assign(isProduct, updateProductDto);

    await this.productRepository.save(isProduct);

    return {
      message: 'محصول با موفقیت بروزرسانی شد.',
      id: isProduct.id,
    };
  }
  async updateDetail(id: string, updateProductDto: UpdateProductDto) {
    const { isProduct } = await this.findOne(id);

    Object.assign(isProduct, updateProductDto);

    await this.productRepository.save(isProduct);

    return {
      message: 'محصول با موفقیت بروزرسانی شد.',
      id: isProduct.id,
    };
  }
  async remove(id: string) {
    const { isProduct } = await this.findOne(id);

    await this.productRepository.remove(isProduct);

    return {
      message: 'محصول با موفقیت حذف شد.',
      id,
    };
  }
}
