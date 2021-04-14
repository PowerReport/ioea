import { Connection } from 'typeorm';
import { FileEntity } from './file.entity';
import { DATABASE_CONNECTION } from '../../db/database.providers';
import { FolderEntity } from './folder.entity';
import { RecycleBinEntity } from '../../recycle-bin/entities/recycle-bin.entity';

export const FILE_REPOSITORY = 'FILE_REPOSITORY';
export const FOLDER_REPOSITORY = 'FOLDER_REPOSITORY';
export const RECYCLE_BIN_REPOSITORY = 'RECYCLE_BIN_REPOSITORY';

export const repositoryProviders = [
  {
    provide: FILE_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(FileEntity),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: FOLDER_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getTreeRepository(FolderEntity),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: RECYCLE_BIN_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(RecycleBinEntity),
    inject: [DATABASE_CONNECTION],
  },
];
