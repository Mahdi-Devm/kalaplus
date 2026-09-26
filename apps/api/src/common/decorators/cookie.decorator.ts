import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';

export const Cookie = (name: string) =>
  createParamDecorator((_, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.cookies?.[name];
  })();
