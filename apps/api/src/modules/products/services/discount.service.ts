import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService {
  removeDiscount(id: string) {
    return 'This action adds a new product';
  }
  addDiscount(id: string, addDiscountDto) {
    return 'This action adds a new product';
  }
  findProductsOnSale() {
    return 'This action adds a new product';
  }
}
