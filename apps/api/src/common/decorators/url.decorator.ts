import { generateQueryParams } from '@common/utils/generate-url-params';
import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';

export const Url = createParamDecorator((_, context: ExecutionContext) => {
  const request: Request = context.switchToHttp().getRequest();
  const stripedQuery = request.query;
  delete stripedQuery.page;
  delete stripedQuery.limit;
  return `${request.protocol}://${request.get('Host')}${request.baseUrl}${request.path}?${generateQueryParams(stripedQuery)}`;
});
