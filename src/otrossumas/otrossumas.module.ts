import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Otrossumas } from './entities/otrossumas.entity';
import { Centralizadormes } from 'src/centralizadormes/entities/centralizadormes.entity';
import { OtrossumasService } from './otrossumas.service';
import { OtrossumasController } from './otrossumas.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Centralizadormes, Otrossumas])],
    providers: [OtrossumasService],
    controllers: [OtrossumasController],
    
  
  })
export class OtrossumasModule {}
