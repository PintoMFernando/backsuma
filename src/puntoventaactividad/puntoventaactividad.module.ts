import { Module } from '@nestjs/common';
import { PuntoventaactividadController } from './puntoventaactividad.controller';
import { PuntoventaactividadService } from './puntoventaactividad.service';

@Module({
  controllers: [PuntoventaactividadController],
  providers: [PuntoventaactividadService]
})
export class PuntoventaactividadModule {}
