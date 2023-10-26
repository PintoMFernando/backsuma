import { Module } from '@nestjs/common';
import { ComprassumasController } from './comprassumas.controller';
import { ComprassumasService } from './comprassumas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprassumas } from './entities/comprassumas.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comprassumas])],
  controllers: [ComprassumasController],
  providers: [ComprassumasService]
})
export class ComprassumasModule {}
