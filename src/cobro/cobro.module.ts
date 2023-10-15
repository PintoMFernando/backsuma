import { Module } from '@nestjs/common';
import { CobroService } from './cobro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cobro } from './entities/cobro.entity';
import { CobroController } from './cobro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cobro])],
  providers: [CobroService],
  controllers: [CobroController]
})
export class CobroModule {}
