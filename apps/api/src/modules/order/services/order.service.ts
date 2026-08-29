import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { OrderItem } from '../entities/order-item.entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}
  async create(createOrderDto: CreateOrderDto, userId: string) {
    const { items, phone, trackingCode } = createOrderDto;
    if (items.length === 0) {
      throw new BadRequestException('محصول وجود ندارد');
    }

    const POrder = await this.orderRepository.findOne({
      where: {
        phone,
        trackingCode,
      },
    });
    if (POrder && POrder.userId !== userId) {
      throw new ConflictException(
        'این شماره تلفن و کد رهگیری برای کاربر دیگری ثبت شده است',
      );
    }
    const createOrder = this.orderRepository.create({
      phone,
      trackingCode,
      userId: userId,
      items: items.map((item) => this.orderItemRepository.create(item)),
    });
    await this.orderRepository.save(createOrder);

    return {
      message: 'سفارش با موفقیت ثبت شد',
    };
  }

  async findMyOrders(userId: string) {
    const MyOrder = await this.orderRepository.find({
      where: { userId },
      relations: { items: true },
    });
    if (MyOrder.length === 0) {
      throw new NotFoundException('سفارشی یافت نشد');
    }
    return MyOrder;
  }

  async findMyOne(id: string, userId: string) {
    const MyOrder = await this.orderRepository.findOne({
      where: { id, userId },
      relations: { items: true },
    });
    if (!MyOrder) {
      throw new NotFoundException('سفارش یافت نشد');
    }
    return MyOrder;
  }

  async findAll() {
    const allOrder = await this.orderRepository.find({
      relations: { items: true, user: true },
    });
    if (allOrder.length === 0) {
      throw new NotFoundException('سفارشی یافت نشد');
    }
    return allOrder;
  }

  async findOne(id: string) {
    const OneOrder = await this.orderRepository.findOne({
      where: { id },
      relations: { items: true, user: true },
    });
    if (!OneOrder) {
      throw new NotFoundException('سفارش یافت نشد');
    }
    return OneOrder;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);
    Object.assign(order, updateOrderDto);
    await this.orderRepository.save(order);

    return {
      message: ` با موفقیت به‌روزرسانی شد`,
      order: order,
    };
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
    return `با موفقیت حذف شد`;
  }
}
