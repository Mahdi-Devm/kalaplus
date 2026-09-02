import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/services/products.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like) private likeRepo: Repository<Like>,
    private readonly productService: ProductsService,
  ) {}
  async create(createLikeDto: CreateLikeDto) {
    const { productId } = createLikeDto;
    const isPoduct = await this.productService.findOne(productId);
    if (!isPoduct) {
      throw new NotFoundException('محصول یافت نشد');
    }

    const like = this.likeRepo.create({
      productId,
    });

    return this.likeRepo.save(like);
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
