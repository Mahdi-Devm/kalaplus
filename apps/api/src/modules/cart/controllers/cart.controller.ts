import { UserInfo } from '@common/decorators/user.decorator';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCartDto } from '../dto/create-cart.dto';
import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(
    @Body() createCartDto: CreateCartDto,
    @UserInfo('userId') userId: string,
  ) {
    return this.cartService.create(createCartDto, userId);
  }

  @Get('find-all')
  findAll(@UserInfo('userId') userId: string) {
    return this.cartService.findAll(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @UserInfo('userId') userId: string) {
    return this.cartService.remove(id, userId);
  }
}
