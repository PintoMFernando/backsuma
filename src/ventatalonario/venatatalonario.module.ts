import { Module } from '@nestjs/common';
import { VenatatalonarioController } from './venatatalonario.controller';
import { VenatatalonarioService } from './venatatalonario.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ventatalonario } from './entities/ventatalonario.entity';
import { Mespuntoventasuma } from 'src/mespuntoventasuma/entities/mespuntoventasuma.entity';
import { Centralizadormes } from 'src/centralizadormes/entities/centralizadormes.entity';
import { Sumatalonario } from 'src/sumatalonario/entities/sumatalonario.entity';
import { SumatalonarioService } from 'src/sumatalonario/sumatalonario.service';
import { Puntoventa } from 'src/puntoventa/entities/puntoventa.entity';
import { PuntoventaService } from 'src/puntoventa/puntoventa.service';
import { PuntoventaModule } from 'src/puntoventa/puntoventa.module';
import { PuntoventaactividadModule } from 'src/puntoventaactividad/puntoventaactividad.module';
import { SumatalonarioModule } from 'src/sumatalonario/sumatalonario.module';
import { Puntoventaactividad } from 'src/puntoventaactividad/entities/puntoventaactividad.entity';
import { PuntoventaactividadService } from 'src/puntoventaactividad/puntoventaactividad.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Ventatalonario,Mespuntoventasuma,Centralizadormes,Sumatalonario,Puntoventa, Puntoventaactividad]),
    PuntoventaactividadModule,

    //PuntoventaModule,SumatalonarioModule
],
  controllers: [VenatatalonarioController],
  providers: [VenatatalonarioService, SumatalonarioService]
})
export class VenatatalonarioModule {}

   