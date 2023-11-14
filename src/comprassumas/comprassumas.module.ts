import { Module } from '@nestjs/common';
import { ComprassumasController } from './comprassumas.controller';
import { ComprassumasService } from './comprassumas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprassumas } from './entities/comprassumas.entity';
import { Comprassumasdetalle } from 'src/comprassumasdetalle/entities/comprassumasdetalle.entity';
import { Centralizador } from 'src/centralizador/entities/centralizador.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comprassumas, Comprassumasdetalle, Centralizador])],
  controllers: [ComprassumasController],
  providers: [ComprassumasService],
  exports:[TypeOrmModule]
})
export class ComprassumasModule {}
