import { Module } from '@nestjs/common';
import { Centralizador } from './entities/centralizador.entity';
import { CentralizadorController } from './centralizador.controller';
import { CentralizadorService } from './centralizador.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Centralizador])],
  controllers: [CentralizadorController],
  providers: [CentralizadorService]
})
export class DatosempresaModule {

}
