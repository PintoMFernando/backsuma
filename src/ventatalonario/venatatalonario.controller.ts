import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VenatatalonarioService } from './venatatalonario.service';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';



@Controller('venatatalonario')
export class VenatatalonarioController {

    constructor(private readonly ventatalonarioService: VenatatalonarioService){}


    @Get('/:idcentralizadormes')   //traeremos todos los talonarios con el idcetnralizadormes
    findAllByIdventatalonario(@Param('idcentralizadormes') idcentralizadormes: string) {
       return   this.ventatalonarioService.findAllByIdventatalonario(idcentralizadormes );
    }

    @Get('/ventames/:idcentralizadormes/:numtalonario')   //traeremos todos los talonarios con el idcetnralizadormes
    findAll(@Param('idcentralizadormes') idcentralizadormes: string,@Param('numtalonario') numtalonario: number) {
       return   this.ventatalonarioService.findAll(idcentralizadormes ,numtalonario);
    }

    @Get('/busquedaventtalonario/:idventtalonario')   //traeremos todos los talonarios con el idcetnralizadormes
    findAllbusqueda(@Param('idventtalonario') idventtalonario: string) {
       return   this.ventatalonarioService.findAllfindAllbusqueda(idventtalonario );
    }
 
 

 
    @Post()
     create( @Body() ventatalonarioDto: CreateVentaTalonarioDto[]) {
        console.log("entra al psotsss");
         return this.ventatalonarioService.create( ventatalonarioDto); 
     }

     
    @Patch('/:idventatalonario')
     update(@Param('idventatalonario') idventatalonario: string, @Body() updateobservacionesDto: UpdateVentaTalonarioDto) {
          return this.ventatalonarioService.update(idventatalonario, updateobservacionesDto);
      }
      
   /*   @Delete('/:idpuntoactividad/:idcentralizadormes/:tipo')
      remove(@Param('idpuntoactividad') idpuntoactividad: string,@Param('idcentralizadormes') idcentralizadormes: string,@Param('tipo') tipo: number){
        
         return this.ventatalonarioService.remove(idpuntoactividad,idcentralizadormes,tipo);
      }  
 */

      @Delete('/:idventatalonario/')
      remove(@Param('idventatalonario') idventatalonario: string ){
        
         return this.ventatalonarioService.remove(idventatalonario);
      }


      @Post('buscarborraractualizar/')
      findAllsearchgetupdatedelete(@Body() comprasssumasdetalleDto: CreateVentaTalonarioDto[]) {
         return   this.ventatalonarioService.findAllsearchgetupdatedelete(comprasssumasdetalleDto);
      }
      
   
 
}
