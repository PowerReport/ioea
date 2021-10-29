import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UnifyAuthGuard } from './unify-auth.guard';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, SharedModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UnifyAuthGuard,
    },
  ],
})
export class AuthModule {}
