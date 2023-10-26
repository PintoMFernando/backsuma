import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CentralizadormesService } from './centralizadormes.service';
import { CreateCentralizadorMesDto } from './dto/createCentralizadorMes.dto';
import { UpdateCentralizadorMesDto } from './dto/updateCentralizadorMes.dto';


@Controller('centralizadormes')
export class CentralizadormesController {
    constructor(private readonly centralizadormesService: CentralizadormesService){}


   @Get('tablacentralizador/:id_dato/:anio')
    
    findAll(@Param('id_dato') id_dato: number,@Param('anio') anio: number) {
    
      return   this.centralizadormesService.findAllByIdCentralizador(id_dato,anio);
   }


   @Get('tablacentralizador/:idcentralizadormes/')
   findAllByIdCentralizadormes(@Param('idcentralizadormes') idcentralizadormes: string) {
     return   this.centralizadormesService.findAllByIdCentralizadormes(idcentralizadormes);
   }



      @Patch('/:idcentralizadormes')
      update(@Param('idcentralizadormes') idcentralizadormes: string, @Body() updateEmpresaDto: UpdateCentralizadorMesDto) {
      return this.centralizadormesService.update(idcentralizadormes, updateEmpresaDto);
     }

     


  
   

   

  
  



}
