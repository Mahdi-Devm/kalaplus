import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findMyOrders() {
    return `This action returns all order`;
  }
  findAll() {
    return `This action returns all order`;
  }

  cancelMyOrder(id: string) {
    return `This action removes a #${id} order`;
  }

  findMyOne(id: string) {
    return `This action removes a #${id} order`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
