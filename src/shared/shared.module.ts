import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OBS_SERVICE } from './obs/obs.interface';
import { ObsService } from './obs/obs.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const services = [
  {
    provide: OBS_SERVICE,
    useClass: ObsService,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TODO: 是否使用配置文件，而非环境变量
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        // type: configService.get('DATABASE_TYPE'),
        type: 'postgres', // TODO: 这个字段是联合类型，所以必须明确指定
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        schema: configService.get('DATABASE_SCHEMA'),
        synchronize: configService.get('DATABASE_SYNCHRONIZE') === 'true',
        entityPrefix: configService.get('DATABASE_ENTITY_PREFIX'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
  ],
  providers: services,
  exports: services,
})
export class SharedModule {}
