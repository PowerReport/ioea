import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { UserModule } from './domain/user/user.module';
import { FsModule } from './fs/fs.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [FsModule, SharedModule, AuthModule, UserModule],
})
export class AppModule {}
