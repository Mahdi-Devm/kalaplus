import { accessTokenName } from '@common/constants/jwt.constants';
import type { Request } from 'express';
export const extractTokenFromCookie = (request: Request) => {
  return request.cookies?.[accessTokenName]
    ? request.cookies[accessTokenName]
    : undefined;
};

export const extractTokenFromHeader = (
  request: Request,
): string | undefined => {
  const authHeader = request.headers.authorization;
  if (!authHeader) return undefined;

  const [type, token] = authHeader.split(' ');
  return type === 'Bearer' ? token : undefined;
};

export const extractToken = (request: Request): string | undefined => {
  return extractTokenFromHeader(request) || extractTokenFromCookie(request);
};
