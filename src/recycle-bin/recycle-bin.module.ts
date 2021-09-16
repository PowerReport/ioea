import { Module } from '@nestjs/common';
import { RECYCLE_BIN_REPOSITORY_PROVIDER } from './entities/repository.providers';
import { RECYCLE_BIN_SERVICE_PROVIDER } from './services/service.providers';

@Module({
  providers: [RECYCLE_BIN_REPOSITORY_PROVIDER, RECYCLE_BIN_SERVICE_PROVIDER],
  exports: [RECYCLE_BIN_SERVICE_PROVIDER],
})
export class RecycleBinModule {}
