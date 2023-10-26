import { Module } from '@nestjs/common';
import { ArchivostalonarioelectronicoController } from './archivostalonarioelectronico.controller';
import { ArchivostalonarioelectronicoService } from './archivostalonarioelectronico.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archivoelectronicotalonario } from './entites/archivotalonarioelectronico.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Archivoelectronicotalonario])],
  controllers: [ArchivostalonarioelectronicoController],
  providers: [ArchivostalonarioelectronicoService]
})
export class ArchivostalonarioelectronicoModule {}
