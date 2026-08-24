import { RolesDecorator } from '@common/decorators/roles.decorator';
import { Roles } from '@common/enums/role-app.enum';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DiscountService } from '../services/discount.service';

@Controller('products')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post(':id/discount')
  @ApiOperation({
    summary: 'اضافه کردن تخفیف به محصول',
    description: 'به محصول موجود تخفیف اضافه می‌کند. فقط ادمین و مالک.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  addDiscount(@Param('id') id: string, @Body() addDiscountDto) {
    return this.discountService.addDiscount(id, addDiscountDto);
  }

  @Delete(':id/discount')
  @ApiOperation({
    summary: 'حذف تخفیف از محصول',
    description: 'تخفیف محصول را حذف می‌کند و قیمت به حالت عادی برمی‌گردد.',
  })
  @RolesDecorator(Roles.ADMIN, Roles.OWNER)
  removeDiscount(@Param('id') id: string) {
    return this.discountService.removeDiscount(id);
  }

  @Get('on-sale')
  @ApiOperation({
    summary: 'دریافت محصولات تخفیف‌دار',
    description: 'لیست محصولاتی که در حال حاضر تخفیف دارند و معتبر است.',
  })
  findProductsOnSale() {
    return this.discountService.findProductsOnSale();
  }
}
