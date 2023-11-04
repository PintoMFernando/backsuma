import { Module } from '@nestjs/common';
import { MespuntoventasumaController } from './mespuntoventasuma.controller';
import { MespuntoventasumaService } from './mespuntoventasuma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mespuntoventasuma } from './entities/mespuntoventasuma.entity';
import { Centralizadormes } from 'src/centralizadormes/entities/centralizadormes.entity';
import { Puntoventa } from 'src/puntoventa/entities/puntoventa.entity';
import { Ventatalonario } from 'src/ventatalonario/entities/ventatalonario.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Mespuntoventasuma,Ventatalonario, Centralizadormes,Puntoventa])],
  controllers: [MespuntoventasumaController],
  providers: [MespuntoventasumaService]
})
export class MespuntoventasumaModule {}
