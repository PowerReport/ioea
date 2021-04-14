import { createConnection } from 'typeorm';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'ioea',
        password: 'ioea',
        database: 'ioea',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        entityPrefix: 'ioea_',
      }),
  },
];
