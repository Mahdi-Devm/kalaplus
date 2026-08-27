import { UserInfo } from '@common/decorators/user.decorator';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCartDto } from '../dto/create-cart.dto';
import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({
    summary: 'افزودن محصول به سبد خرید',
    description:
      'محصول به سبد خرید کاربر اضافه می‌شود. موجودی انبار بررسی می‌شود.',
  })
  create(
    @Body() createCartDto: CreateCartDto,
    @UserInfo('userId') userId: string,
  ) {
    return this.cartService.create(createCartDto, userId);
  }

  @Get('find-all')
  @ApiOperation({
    summary: 'دریافت سبد خرید',
    description: 'همه آیتم‌های سبد خرید کاربر به همراه قیمت کل',
  })
  findAll(@UserInfo('userId') userId: string) {
    return this.cartService.findAll(userId);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'حذف محصول از سبد خرید',
    description: 'یک محصول خاص از سبد خرید کاربر حذف می‌شود.',
  })
  remove(@Param('id') id: string, @UserInfo('userId') userId: string) {
    return this.cartService.remove(id, userId);
  }
}
