import { BaseEntity } from '@common/abstracts/base.entity';
import { Roles } from '@common/enums/role-app.enum';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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
  @OneToMany(() => Cart, (cart) => cart.userId)
  carts: Cart[];
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
