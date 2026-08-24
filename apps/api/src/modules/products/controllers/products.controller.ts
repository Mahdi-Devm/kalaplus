import { PaginationOptions } from '@common/decorators/pagination-option.decorator';
import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import type { PaginateQuery } from 'nestjs-paginate';
import { Paginate } from 'nestjs-paginate';
import { CreateProductDto } from '../dto/create-product.dto';
import { PaginateProductResponse } from '../dto/paginate-product-response.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('creat')
  @ApiOperation({
    summary: 'ایجاد محصول جدید',
    description:
      'فقط ادمین و مالک می‌توانند محصول جدید ایجاد کنند. تخفیف اختیاری است.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('admin/list')
  @ApiOperation({
    summary: 'لیست همه محصولات برای ادمین',
    description:
      'همه محصولات را با اطلاعات کامل شامل موجودی و قیمت دقیق نمایش می‌دهد.',
  })
  @ApiOkResponse({ type: PaginateProductResponse })
  @PaginationOptions({
    searchOptions: [
      {
        field: 'title',
        example: 'کیف',
      },
      {
        field: 'slug',
        example: 'cement-type-2',
      },
    ],
    sortOptions: [
      { example: 'createdAt:DESC' },
      { example: 'createdAt:ASC' },
      { example: 'price:DESC' },
      { example: 'price:ASC' },
      { example: 'title:ASC' },
    ],
    filterOptions: [
      {
        field: 'categoryId',
        example: 'uuid-category',
      },
      {
        field: 'price',
        example: '$gte:100000',
      },
      {
        field: 'discountPercent',
        example: '$gt:0',
      },
    ],
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  listForAdmin(@Paginate() query: PaginateQuery) {
    return this.productsService.listForAdmin(query);
  }

  @Get('user/list')
  @ApiOkResponse({ type: PaginateProductResponse })
  @PaginationOptions({
    searchOptions: [
      {
        field: 'title',
        example: 'سیمان',
      },
    ],
    sortOptions: [
      { example: 'createdAt:DESC' },
      { example: 'price:ASC' },
      { example: 'price:DESC' },
    ],
    filterOptions: [
      {
        field: 'categoryId',
        example: 'uuid-category',
      },
      {
        field: 'price',
        example: '$gte:100000',
      },
      {
        field: 'price',
        example: '$lte:500000',
      },
    ],
  })
  @ApiOperation({
    summary: 'لیست محصولات برای کاربران',
    description: 'محصولات با قیمت‌های تخفیف‌ خورده (اگر تخفیف داشته باشند).',
  })
  listForUser(@Paginate() query: PaginateQuery) {
    return this.productsService.listForUser(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'دریافت جزئیات محصول',
    description:
      'اطلاعات کامل یک محصول شامل قیمت اصلی، قیمت تخفیف‌خورده و وضعیت تخفیف.',
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'بروزرسانی کامل محصول',
    description:
      'همه فیلدهای محصول را بروزرسانی می‌کند. فیلدهای ارسال نشده حذف می‌شوند.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'بروزرسانی جزئی محصول',
    description:
      'فقط فیلدهای ارسال شده را بروزرسانی می‌کند. بقیه فیلدها تغییری نمی‌کنند.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  updateDetail(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateDetail(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'حذف محصول',
    description:
      'محصول را به‌طور کامل از دیتابیس حذف می‌کند. این عملیات غیرقابل بازگشت است!',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
