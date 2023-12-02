import { Module } from '@nestjs/common';
import { CentralizadormesService } from './centralizadormes.service';
import { CentralizadormesController } from './centralizadormes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centralizadormes } from './entities/centralizadormes.entity';
import { Comprassumas } from 'src/comprassumas/entities/comprassumas.entity';
import { Otrossumas } from 'src/otrossumas/entities/otrossumas.entity';
import { Mespuntoventasuma } from '../mespuntoventasuma/entities/mespuntoventasuma.entity';
import { Centralizador } from 'src/centralizador/entities/centralizador.entity';
import { Ventatalonario } from 'src/ventatalonario/entities/ventatalonario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Centralizador, Centralizadormes, Comprassumas,Otrossumas,Mespuntoventasuma, Ventatalonario])],
  providers: [CentralizadormesService],
  controllers: [CentralizadormesController],
  

})
export class CentralizadormesModule {}
