import { BaseEntity } from '@common/abstracts/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  name: string;
  @Column({ unique: true })
  phone: string;
}
