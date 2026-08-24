import { BaseEntity } from '@common/abstracts/base.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ unique: true })
  title: string;

  @Column({ unique: true })
  slug: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
