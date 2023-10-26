import { Module } from '@nestjs/common';
import { VenatatalonarioController } from './venatatalonario.controller';
import { VenatatalonarioService } from './venatatalonario.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ventatalonario } from './entities/ventatalonario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Ventatalonario])],
  controllers: [VenatatalonarioController],
  providers: [VenatatalonarioService]
})
export class VenatatalonarioModule {}

   