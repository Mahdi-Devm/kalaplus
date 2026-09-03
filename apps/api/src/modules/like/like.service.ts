import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/services/products.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like) private likeRepo: Repository<Like>,
    private readonly productService: ProductsService,
  ) {}
  async create(createLikeDto: CreateLikeDto, userId: string) {
    const { productId } = createLikeDto;
    const isPoduct = await this.productService.findOne(productId);
    if (!isPoduct) {
      throw new NotFoundException('محصول یافت نشد');
    }

    const existingLike = await this.likeRepo.findOne({
      where: {
        productId,
        userId,
      },
    });

    if (existingLike) {
      throw new ConflictException('شما قبلا این محصول را لایک کرده اید.');
    }

    const like = this.likeRepo.create({
      productId,
      userId,
    });

    this.likeRepo.save(like);
    return 'با موفقیت اضافه شد.';
  }

  async findAll(userId: string) {
    const likes = await this.likeRepo.find({
      where: { userId },
      relations: { product: true },
    });
    return likes;
  }

  async findOne(id: string, userId: string) {
    const like = await this.likeRepo.findOne({
      where: { id, userId },
      relations: { product: true },
    });

    if (!like) {
      throw new NotFoundException('لایک مورد نظر یافت نشد');
    }

    return like;
  }

  async remove(id: string, userId: string) {
    const like = await this.likeRepo.findOne({
      where: { id, userId },
    });

    if (!like) {
      throw new NotFoundException('لایک مورد نظر یافت نشد');
    }

    await this.likeRepo.remove(like);
    return 'لایک با موفقیت حذف شد';
  }
}
