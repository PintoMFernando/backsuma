import { Module } from '@nestjs/common';
import { PuntoventaactividadController } from './puntoventaactividad.controller';
import { PuntoventaactividadService } from './puntoventaactividad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Puntoventa } from 'src/puntoventa/entities/puntoventa.entity';
import { Ventatalonario } from 'src/ventatalonario/entities/ventatalonario.entity';
import { Actividades } from 'src/actividades/entities/actividades.entity';
import { Puntoventaactividad } from './entities/puntoventaactividad.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Ventatalonario, Actividades, Puntoventa, Puntoventaactividad])],
  controllers: [PuntoventaactividadController],
  providers: [PuntoventaactividadService],
  exports:[PuntoventaactividadService]
})
export class PuntoventaactividadModule {}
