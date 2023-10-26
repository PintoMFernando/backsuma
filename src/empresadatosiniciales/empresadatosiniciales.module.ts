import { Module } from '@nestjs/common';
import { EmpresadatosinicialesService } from './empresadatosiniciales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresadatosiniciales } from './entities/empresadatosiniciales.entity';
import { EmpresadatosinicialesController } from './empresadatosiniciales.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Empresadatosiniciales])],
  controllers: [EmpresadatosinicialesController],
  providers: [EmpresadatosinicialesService]
})
export class EmpresadatosinicialesModule {}
