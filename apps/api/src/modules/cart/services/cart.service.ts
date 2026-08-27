import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/modules/products/services/products.service';
import { Repository } from 'typeorm';
import { CreateCartDto } from '../dto/create-cart.dto';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
    private productService: ProductsService,
  ) {}

  async create(createCartDto: CreateCartDto, userId: string) {
    const { productId, quantity = 1 } = createCartDto;

    const product = await this.productService.findOne(productId);

    if (!product) {
      throw new NotFoundException('محصول یافت نشد');
    }

    if (product.stock < quantity) {
      throw new BadRequestException(
        `تنها ${product.stock} عدد از این محصول موجود است`,
      );
    }

    let cartItem = await this.cartRepository.findOne({
      where: {
        userId,
        productId,
      },
    });

    if (cartItem) {
      const newQuantity = cartItem.quantity + quantity;

      if (product.stock < newQuantity) {
        throw new BadRequestException(
          `تنها ${product.stock} عدد از این محصول موجود است`,
        );
      }

      cartItem.quantity = newQuantity;
      await this.cartRepository.save(cartItem);

      return {
        message: 'تعداد محصول در سبد خرید به‌روزرسانی شد',
        cartItem,
      };
    }

    const newCartItem = this.cartRepository.create({
      userId,
      productId,
      quantity,
    });

    await this.cartRepository.save(newCartItem);

    return {
      message: 'محصول به سبد خرید اضافه شد',
      cartItem: newCartItem,
    };
  }

  async findAll(userId: string) {
    const cartItems = await this.cartRepository.find({
      where: { userId },
      relations: { product: true },
    });

    return {
      items: cartItems,
      totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    };
  }

  async remove(id: string, userId: string) {
    const cartItem = await this.cartRepository.findOne({
      where: { id, userId },
    });

    if (!cartItem) {
      throw new NotFoundException('آیتم در سبد خرید یافت نشد');
    }

    await this.cartRepository.remove(cartItem);

    return {
      message: 'محصول از سبد خرید حذف شد',
    };
  }
}
