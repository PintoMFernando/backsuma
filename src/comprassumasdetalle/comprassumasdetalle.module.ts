import { Module } from '@nestjs/common';
import { ComprassumasdetalleController } from './comprassumasdetalle.controller';
import { ComprassumasdetalleService } from './comprassumasdetalle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprassumasdetalle } from './entities/comprassumasdetalle.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comprassumasdetalle])],
  controllers: [ComprassumasdetalleController],
  providers: [ComprassumasdetalleService]
})
export class ComprassumasdetalleModule {}
