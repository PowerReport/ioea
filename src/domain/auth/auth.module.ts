import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UnifyAuthGuard } from './unify-auth.guard';
import { UserModule } from '../user/user.module';
import { SharedModule } from '../../shared/shared.module';

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
