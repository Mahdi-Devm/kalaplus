import { BaseEntity } from '@common/abstracts/base.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
@Entity()
export class Like extends BaseEntity {
  @ManyToOne(() => Product, (product) => product.likes)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  productId: string;
}
