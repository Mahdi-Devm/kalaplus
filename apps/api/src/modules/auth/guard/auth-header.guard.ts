import { JwtAuthService } from '@auth/services/jwt.service';
import { IS_PUBLIC_KEY } from '@common/decorators/public.decorator';
import { extractToken } from '@common/utils/extract-token';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
@Injectable()
export class AuthWithHeader implements CanActivate {
  constructor(
    private readonly JwtService: JwtAuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const skipAuth = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (skipAuth) return true;

    const request = context.switchToHttp().getRequest<Request>();

    try {
      const token = extractToken(request);
      if (!token) {
        throw new UnauthorizedException('Token not provided');
      }

      const payload = await this.JwtService.verifyAccessToken(token);
      request.user = payload;

      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
