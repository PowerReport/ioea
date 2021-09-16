import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { SharedModule } from 'src/shared/shared.module';
import { FilesController } from './controllers/files.controller';
import { FoldersController } from './controllers/folders.controller';
import {
  FILE_REPOSITORY_PROVIDER,
  FOLDER_REPOSITORY_PROVIDER,
} from './entities/repository.providers';
import {
  FILE_SERVICE_PROVIDER,
  FOLDER_SERVICE_PROVIDER,
  MIXIN_SERVICE_PROVIDER,
} from './services/service.providers';
import { RECYCLE_BIN_SERVICE_PROVIDER } from '../recycle-bin/services/service.providers';

@Module({
  imports: [DatabaseModule, SharedModule],
  controllers: [FilesController, FoldersController],
  providers: [
    FILE_REPOSITORY_PROVIDER,
    FOLDER_REPOSITORY_PROVIDER,
    FILE_SERVICE_PROVIDER,
    FOLDER_SERVICE_PROVIDER,
    MIXIN_SERVICE_PROVIDER,
    RECYCLE_BIN_SERVICE_PROVIDER,
  ],
})
export class FileStorageModule {}
