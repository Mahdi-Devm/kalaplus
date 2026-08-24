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
import { ApiOperation } from '@nestjs/swagger';
import { CreateProductDto } from '../dto/create-product.dto';
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

  //دریافت محصولات تخفیف‌ دار

  @Get('admin/list')
  @ApiOperation({
    summary: 'لیست همه محصولات برای ادمین',
    description:
      'همه محصولات را با اطلاعات کامل شامل موجودی و قیمت دقیق نمایش می‌دهد.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  listForAdmin() {
    return this.productsService.listForAdmin();
  }

  @Get('user/list')
  @ApiOperation({
    summary: 'لیست محصولات برای کاربران',
    description: 'محصولات با قیمت‌های تخفیف‌خورده (اگر تخفیف داشته باشند).',
  })
  listForUser() {
    return this.productsService.listForUser();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'دریافت جزئیات محصول',
    description:
      'اطلاعات کامل یک محصول شامل قیمت اصلی، قیمت تخفیف‌خورده و وضعیت تخفیف.',
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
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
    return this.productsService.updateProduct(+id, updateProductDto);
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
    return this.productsService.updateDetail(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'حذف محصول',
    description:
      'محصول را به‌طور کامل از دیتابیس حذف می‌کند. این عملیات غیرقابل بازگشت است!',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
