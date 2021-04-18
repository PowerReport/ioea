import { Module } from '@nestjs/common';
import { repositoryProviders } from './entities/repository.providers';
import { serviceProviders } from './services/service.providers';

@Module({
  providers: [...repositoryProviders, ...serviceProviders],
  exports: [...serviceProviders],
})
export class RecycleBinModule {}
