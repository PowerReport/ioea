import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { FileController } from './file.controller';
import { FolderController } from './folder.controller';
import { repositoryProviders } from './entities/repository.providers';
import { serviceProviders } from './services/service.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController, FolderController],
  providers: [...repositoryProviders, ...serviceProviders],
})
export class IoModule {}
