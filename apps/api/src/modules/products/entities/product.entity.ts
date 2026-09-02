import { BaseEntity } from '@common/abstracts/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  title: string;

  @Column()
  shortDescription: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  price: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  mainImage: string;

  @Column('text', { array: true })
  images: string[];

  @Column({ type: 'float', nullable: true })
  discountPercent?: number;

  @Column({ default: null, nullable: true })
  discountPrice?: number;

  //موجودی انبار
  @Column({ default: 0 })
  stock: number;

  // تعداد فروخته شده
  @Column({ default: 0 })
  sold: number;

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
  @Column({ type: 'uuid', nullable: true })
  categoryId: string;
}
