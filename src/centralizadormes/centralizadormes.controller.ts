import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CentralizadormesService } from './centralizadormes.service';
import { CreateCentralizadorMesDto } from './dto/createMespuntoventasuma.dto';
import { UpdateCentralizadorMesDto } from './dto/updateMespuntoventasuma.dto';


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

   @Get('otrossumas/:idcentralizadormes/')
   find(@Param('idcentralizadormes') idcentralizadormes: string) {
       console.log("entra la controladorDESERVICIOOOO");
      return   this.centralizadormesService.find(idcentralizadormes);
   }



   @Get('tablacentralizadorgato/:idcentralizadormes/')
   
   findMany(@Param('idcentralizadormes') idcentralizadormes: string) {
    console.log("entra al controlador");
     return   this.centralizadormesService.findMany(idcentralizadormes);
   }



      @Patch('/:idcentralizadormes')
      update(@Param('idcentralizadormes') idcentralizadormes: string, @Body() updateEmpresaDto: UpdateCentralizadorMesDto) {
      return this.centralizadormesService.update(idcentralizadormes, updateEmpresaDto);
     }

     


  
   

   

  
  



}
