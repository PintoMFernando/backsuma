import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OtrossumasService } from './otrossumas.service';
import { UpdateCentralizadorMesDto } from 'src/centralizadormes/dto/updateMespuntoventasuma.dto';
import { UpdateOtrossumasDto } from './dto/updateOtrossumas.dto';
import { CreateOtrossumasDto } from './dto/createOtrossumas.dto';

@Controller('otrossumas')
export class OtrossumasController {

    
    constructor(private readonly otrossumasService: OtrossumasService){}


  
    @Get('/:idcentralizadormes')
    findAllByIdventatalonario(@Param('idcentralizadormes') idcentralizadormes: string) {
       return   this.otrossumasService.findAllByIdotrossumas(idcentralizadormes);
    }

    @Get('solodetalles/:idotrossumas')
    findAll(@Param('idotrossumas') idotrossumas: string) {
       return   this.otrossumasService.findAll(idotrossumas);
    }
 
    @Post()
     create( @Body() otrossusmasDto: CreateOtrossumasDto[]) {
        console.log("entra al psotsss");
         return this.otrossumasService.create( otrossusmasDto); 
     }

     
    @Patch('/:idotrossumas')
     update(@Param('idotrossumas') idotrossumas: string, @Body() updateotrossumasDto: UpdateOtrossumasDto) {
          return this.otrossumasService.update(idotrossumas, updateotrossumasDto);
      }
 
 
      @Delete('/:idotrossumas')
      delete(@Param('idotrossumas') idotrossumas: string){
         console.log("aqui esta mi idotros sumaaaws",idotrossumas);
         return this.otrossumasService.remove(idotrossumas);
      }  



      @Post('buscarborrarcrear/:idcentralizadormes')
      findAllsearchgetupdatedelete(@Param('idcentralizadormes') idcentralizadormes: string,@Body() otrossusmasDto: CreateOtrossumasDto[]) {
         return   this.otrossumasService.findAllsearchgetdelete(idcentralizadormes,otrossusmasDto);
      }
  
   

   

}
