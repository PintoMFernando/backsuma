import { Module } from '@nestjs/common';
import { ComprassumasdetalleController } from './comprassumasdetalle.controller';
import { ComprassumasdetalleService } from './comprassumasdetalle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprassumasdetalle } from './entities/comprassumasdetalle.entity';
import { Comprassumas } from 'src/comprassumas/entities/comprassumas.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comprassumasdetalle,Comprassumas])],
  controllers: [ComprassumasdetalleController],
  providers: [ComprassumasdetalleService],
  exports:[TypeOrmModule]
})
export class ComprassumasdetalleModule {}
