import { Connection } from 'typeorm';
import { FileEntity } from './file.entity';
import { DATABASE_CONNECTION } from '../../db/database.providers';
import { FolderEntity } from './folder.entity';

export const FILE_REPOSITORY = 'FILE_REPOSITORY';
export const FOLDER_REPOSITORY = 'FOLDER_REPOSITORY';

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
];
