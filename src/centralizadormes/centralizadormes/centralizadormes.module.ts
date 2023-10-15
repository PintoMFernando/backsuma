import { Module } from '@nestjs/common';
import { CentralizadormesService } from './centralizadormes.service';
import { CentralizadormesController } from './centralizadormes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centralizadormes } from './entities/centralizadormes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Centralizadormes])],
  providers: [CentralizadormesService],
  controllers: [CentralizadormesController],
  

})
export class CentralizadormesModule {}
