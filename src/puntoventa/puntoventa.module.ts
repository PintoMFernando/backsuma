import { Module } from '@nestjs/common';
import { PuntoventaService } from './puntoventa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PuntoventaController } from './puntoventa.controller';
import { Puntoventa } from './entities/puntoventa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Puntoventa])],
  providers: [PuntoventaService],
  controllers: [PuntoventaController],
  exports:[PuntoventaService]

})
export class PuntoventaModule {}
