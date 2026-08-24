import { BaseEntity } from '@common/abstracts/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  discountPercent?: number;

  @Column({ default: null })
  discountPrice?: number;
}
