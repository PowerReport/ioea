import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { FilesController } from './controllers/files.controller';
import { FoldersController } from './controllers/folders.controller';
import { repositoryProviders } from './entities/repository.providers';
import { serviceProviders } from './services/service.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FilesController, FoldersController],
  providers: [...repositoryProviders, ...serviceProviders],
})
export class IoModule {}
