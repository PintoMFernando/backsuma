import { Module } from '@nestjs/common';
import { ActividadesController } from './actividades.controller';
import { ActividadesService } from './actividades.service';
import { Actividades } from './entities/actividades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Actividades])],
  controllers: [ActividadesController],
  providers: [ActividadesService]
})
export class ActividadesModule {}
