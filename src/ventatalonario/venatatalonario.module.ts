import { Module } from '@nestjs/common';
import { VenatatalonarioController } from './venatatalonario.controller';
import { VenatatalonarioService } from './venatatalonario.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ventatalonario } from './entities/ventatalonario.entity';
import { Mespuntoventasuma } from 'src/mespuntoventasuma/entities/mespuntoventasuma.entity';
import { Centralizadormes } from 'src/centralizadormes/entities/centralizadormes.entity';
import { Sumatalonario } from 'src/sumatalonario/entities/sumatalonario.entity';
import { SumatalonarioService } from 'src/sumatalonario/sumatalonario.service';

@Module({
  imports:[TypeOrmModule.forFeature([Ventatalonario,Mespuntoventasuma,Centralizadormes,Sumatalonario])],
  controllers: [VenatatalonarioController],
  providers: [VenatatalonarioService, SumatalonarioService]
})
export class VenatatalonarioModule {}

   