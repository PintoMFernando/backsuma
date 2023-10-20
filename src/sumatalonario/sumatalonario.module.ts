import { Module } from '@nestjs/common';
import { SumatalonarioController } from './sumatalonario.controller';
import { SumatalonarioService } from './sumatalonario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sumatalonario } from './entities/sumatalonario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sumatalonario])],
  controllers: [SumatalonarioController],
  providers: [SumatalonarioService]
})
export class SumatalonarioModule {}
