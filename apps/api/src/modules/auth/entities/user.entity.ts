import { BaseEntity } from '@common/abstracts/base.entity';
import { Column } from 'typeorm';

export class User extends BaseEntity {
  @Column()
  name: string;
  @Column({ unique: true })
  phone: string;
}
