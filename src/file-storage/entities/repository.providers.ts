import { Connection } from 'typeorm';
import { FileEntity } from './file.entity';
import { DATABASE_CONNECTION } from '../../db/database.providers';
import { FolderEntity } from './folder.entity';

const FILE_REPOSITORY = 'FILE_REPOSITORY';

const FILE_REPOSITORY_PROVIDER = {
  provide: FILE_REPOSITORY,
  useFactory: (connection: Connection) => connection.getRepository(FileEntity),
  inject: [DATABASE_CONNECTION],
};

const FOLDER_REPOSITORY = 'FOLDER_REPOSITORY';

const FOLDER_REPOSITORY_PROVIDER = {
  provide: FOLDER_REPOSITORY,
  useFactory: (connection: Connection) =>
    connection.getTreeRepository(FolderEntity),
  inject: [DATABASE_CONNECTION],
};

export {
  FILE_REPOSITORY,
  FILE_REPOSITORY_PROVIDER,
  FOLDER_REPOSITORY,
  FOLDER_REPOSITORY_PROVIDER,
};
