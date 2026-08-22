import { Roles } from '@common/enums/role-app.enum';

export type JwtPayload = {
  sub: string;
  role: Roles;
};
