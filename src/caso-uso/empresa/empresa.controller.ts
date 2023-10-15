import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { GetEmpresaDto } from './dto/getEmpresa.dto';
import { Empresa } from './entities/empresa.entity';
import { EmpresaService } from './empresa.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEmpresaDto } from './dto/updateEmpresa.dto';

@Controller('empresa')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService){}
    

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }
    
    @Get('/:idempresa')
    findOne(@Param('idempresa') idempresa: number) {
    return this.empresaService.findOne(idempresa);
    }




    @Patch('/:idempresa')
    update(@Param('idempresa') idempresa: number, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(idempresa, updateEmpresaDto);
   }

   


  
}
/*
  @Post()
  create(@Body() getEmpresaDto: CreateCatDto) {
    return this.empresaService.create(createCatDto);
  }

   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }


*/
