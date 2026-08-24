import { PaginationResponse } from '@common/dto/pagination-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class PaginateProductResponse extends PaginationResponse {
  @ApiProperty({ type: [Product] })
  data: Product[];
}
