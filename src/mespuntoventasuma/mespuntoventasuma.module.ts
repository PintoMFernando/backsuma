import { Module } from '@nestjs/common';
import { MespuntoventasumaController } from './mespuntoventasuma.controller';
import { MespuntoventasumaService } from './mespuntoventasuma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenatatalonarioModule } from 'src/ventatalonario/venatatalonario.module';

@Module({
  imports:[TypeOrmModule.forFeature([MespuntoventasumaModule,VenatatalonarioModule])],
  controllers: [MespuntoventasumaController],
  providers: [MespuntoventasumaService]
})
export class MespuntoventasumaModule {}

