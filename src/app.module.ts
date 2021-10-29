import { Module } from '@nestjs/common';
import { FsModule } from './fs/fs.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FsModule, SharedModule, AuthModule, UserModule],
})
export class AppModule {}
