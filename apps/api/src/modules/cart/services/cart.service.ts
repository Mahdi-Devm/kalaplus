import { Injectable } from '@nestjs/common';
import { CreateCartDto } from '../dto/create-cart.dto';

@Injectable()
export class CartService {
  create(createCartDto: CreateCartDto, userId: string) {
    return 'This action adds a new cart';
  }

  findAll(userId: string) {
    return `This action returns all cart`;
  }

  remove(id: string, userId: string) {
    return `This action removes a #${id} cart`;
  }
}
