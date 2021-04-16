import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UnifyGuard } from './unify.guard';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UnifyGuard,
    },
  ],
})
export class AuthModule {}
