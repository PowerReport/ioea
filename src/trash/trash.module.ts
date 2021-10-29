import { Module } from '@nestjs/common';
import { TRASH_SERVICE } from './services/trash.interface';
import { TrashService } from './services/trash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrashEntity } from './entities/trash.entity';

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
