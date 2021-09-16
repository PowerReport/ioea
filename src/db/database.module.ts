import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DATABASE_PROVIDER } from './database.providers';

@Module({
  imports: [ConfigModule],
  providers: [DATABASE_PROVIDER],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule {}
