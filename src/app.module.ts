import { Module } from '@nestjs/common';
import { FileStorageModule } from './file-storage/file-storage.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FileStorageModule, SharedModule, AuthModule],
})
export class AppModule {}
