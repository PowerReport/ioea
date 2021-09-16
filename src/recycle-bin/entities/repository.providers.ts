import { Connection } from 'typeorm';
import { DATABASE_CONNECTION } from '../../db/database.providers';
import { RecycleBinEntity } from './recycle-bin.entity';

const RECYCLE_BIN_REPOSITORY = 'RECYCLE_BIN_REPOSITORY';

const RECYCLE_BIN_REPOSITORY_PROVIDER = {
  provide: RECYCLE_BIN_REPOSITORY,
  useFactory: (connection: Connection) =>
    connection.getRepository(RecycleBinEntity),
  inject: [DATABASE_CONNECTION],
};

export { RECYCLE_BIN_REPOSITORY, RECYCLE_BIN_REPOSITORY_PROVIDER };
