import { Module } from '@nestjs/common';
import { Centralizador } from './entities/centralizador.entity';
import { CentralizadorController } from './centralizador.controller';
import { CentralizadorService } from './centralizador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centralizadormes } from 'src/centralizadormes/entities/centralizadormes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Centralizador, Centralizadormes])],
  controllers: [CentralizadorController],
  providers: [CentralizadorService]
})
export class CentralizadorModule {

}
