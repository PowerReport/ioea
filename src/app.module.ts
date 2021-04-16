import { Module } from '@nestjs/common';
import { IoModule } from './io/io.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [IoModule, SharedModule, AuthModule],
})
export class AppModule {}
