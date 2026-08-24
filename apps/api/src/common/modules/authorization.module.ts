import { AuthModule } from '@auth/auth.module';
import { AuthWithHeader } from '@auth/guard/auth-header.guard';
import { RolesGuard } from '@common/guards/rolse.guard';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthWithHeader,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [],
})
export class AuthorizationModule {}
