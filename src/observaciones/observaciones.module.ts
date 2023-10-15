import { Module } from '@nestjs/common';
import { Observaciones } from './entities/observaciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObservacionesService } from './observaciones.service';
import { ObservacionesController } from './observaciones.controller';


@Module({ 
    imports: [TypeOrmModule.forFeature([Observaciones])],
    providers: [ObservacionesService],
    controllers: [ObservacionesController]})
export class ObservacionesModule {}
