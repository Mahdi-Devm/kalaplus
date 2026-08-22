import { Roles } from '@common/enums/role-app.enum';
import { SetMetadata } from '@nestjs/common';

export const RolesDecorator = (...roles: Roles[]) =>
  SetMetadata(process.env.ROLES_KEY, roles);
