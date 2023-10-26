import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VenatatalonarioService } from './venatatalonario.service';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';



@Controller('venatatalonario')
export class VenatatalonarioController {

    constructor(private readonly ventatalonarioService: VenatatalonarioService){}


    @Get('/:idventatalonario')
    findAllByIdventatalonario(@Param('idventatalonario') idventatalonario: number) {
       return   this.ventatalonarioService.findAllByIdventatalonario(idventatalonario);
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
 
 
      @Delete('/:idobservaciones')
      remove(@Param('idobservaciones') idobservaciones: string){
         console.log("aqui esta",idobservaciones);
         return this.ventatalonarioService.remove(idobservaciones);
      }  
 
      
   
 
}
