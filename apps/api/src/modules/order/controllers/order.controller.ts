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
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: 'ثبت سفارش جدید',
    description: 'سفارش جدید توسط کاربر ثبت می‌ شود.',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('my')
  @RolesDecorator(Roles.USER)
  @ApiOperation({
    summary: 'لیست سفارش‌های من',
    description: 'لیست تمام سفارش‌ های کاربر لاگین‌ شده را برمی‌ گرداند.',
  })
  findMyOrders() {
    return this.orderService.findMyOrders();
  }

  @Get('my/:id')
  @RolesDecorator(Roles.USER)
  @ApiOperation({
    summary: 'جزئیات سفارش من',
    description: 'جزئیات یک سفارش متعلق به کاربر را برمی‌ گرداند.',
  })
  findMyOne(@Param('id') id: string) {
    return this.orderService.findMyOne(id);
  }

  @Patch('my/:id/cancel')
  @RolesDecorator(Roles.USER)
  @ApiOperation({
    summary: 'لغو سفارش',
    description: 'کاربر می‌تواند سفارش خود را در وضعیت pending لغو کند.',
  })
  cancelMyOrder(@Param('id') id: string) {
    return this.orderService.cancelMyOrder(id);
  }

  @Get()
  @RolesDecorator(Roles.OWNER, Roles.ADMIN)
  @ApiOperation({
    summary: 'لیست همه سفارش‌ها',
    description: 'لیست تمام سفارش‌ های سیستم را برای ادمین برمی‌ گرداند.',
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @RolesDecorator(Roles.OWNER, Roles.ADMIN)
  @ApiOperation({
    summary: 'جزئیات سفارش',
    description: 'جزئیات یک سفارش خاص را برای ادمین برمی‌ گرداند.',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  @RolesDecorator(Roles.OWNER, Roles.ADMIN)
  @ApiOperation({
    summary: 'آپدیت سفارش',
    description:
      'وضعیت، کد پیگیری و اطلاعات سفارش توسط ادمین بروزرسانی می‌شود.',
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @RolesDecorator(Roles.OWNER, Roles.ADMIN)
  @ApiOperation({
    summary: 'حذف سفارش',
    description: 'یک سفارش توسط ادمین حذف می‌شود.',
  })
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
