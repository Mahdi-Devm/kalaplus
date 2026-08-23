import { BaseEntity } from '@common/abstracts/base.entity';
import { Roles } from '@common/enums/role-app.enum';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  name: string;
  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.USER,
  })
  role: Roles;
  @Column({ unique: true })
  phone: string;
  @Column({ nullable: true, unique: true })
  refreshToken: string;
}
