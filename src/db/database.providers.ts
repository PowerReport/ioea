import { createConnection } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (configService: ConfigService) =>
      await createConnection({
        type: configService.get('database.type'),
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.get('database.synchronize'),
        entityPrefix: configService.get('database.entityPrefix'),
      }),
    inject: [ConfigService],
  },
];
