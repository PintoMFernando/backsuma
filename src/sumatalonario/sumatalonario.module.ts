import { Module } from '@nestjs/common';
import { SumatalonarioController } from './sumatalonario.controller';
import { SumatalonarioService } from './sumatalonario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sumatalonario } from './entities/sumatalonario.entity';
import { VenatatalonarioService } from 'src/ventatalonario/venatatalonario.service';
import { Ventatalonario } from 'src/ventatalonario/entities/ventatalonario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sumatalonario,Ventatalonario])],
  controllers: [SumatalonarioController],
  providers: [SumatalonarioService,VenatatalonarioService]
})
export class SumatalonarioModule {}
