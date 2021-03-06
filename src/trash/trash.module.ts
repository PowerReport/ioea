import { Module } from '@nestjs/common';
import { TRASH_SERVICE } from './service/trash.interface';
import { TrashService } from './service/trash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrashEntity } from '../domain/trash/model/trash.entity';

const services = [
  {
    provide: TRASH_SERVICE,
    useClass: TrashService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([TrashEntity])],
  providers: services,
})
export class TrashModule {}
