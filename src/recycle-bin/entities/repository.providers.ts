import { Connection } from 'typeorm';
import { DATABASE_CONNECTION } from '../../db/database.providers';
import { RecycleBinEntity } from './recycle-bin.entity';

export const RECYCLE_BIN_REPOSITORY = 'RECYCLE_BIN_REPOSITORY';

export const repositoryProviders = [
  {
    provide: RECYCLE_BIN_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(RecycleBinEntity),
    inject: [DATABASE_CONNECTION],
  },
];
