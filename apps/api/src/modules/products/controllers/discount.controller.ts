import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class DiscountController {
  constructor(private readonly productsService: ProductsService) {}

  @Post(':id/discount')
  @ApiOperation({
    summary: 'اضافه کردن تخفیف به محصول',
    description: 'به محصول موجود تخفیف اضافه می‌کند. فقط ادمین و مالک.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  addDiscount(@Param('id') id: string, @Body() addDiscountDto) {
    return this.productsService.addDiscount(id, addDiscountDto);
  }

  @Delete(':id/discount')
  @ApiOperation({
    summary: 'حذف تخفیف از محصول',
    description: 'تخفیف محصول را حذف می‌کند و قیمت به حالت عادی برمی‌گردد.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  removeDiscount(@Param('id') id: string) {
    return this.productsService.removeDiscount(id);
  }
}
