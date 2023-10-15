import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObservacionesService } from './observaciones.service';
import { UpdateObservacionesDto } from './dto/updateObservaciones.dto';
import { CreateObservacionesDto } from './dto/createObservaciones.dto';

@Controller('observaciones')
export class ObservacionesController {

    constructor(private readonly observacionesService: ObservacionesService){}


   @Get('/:idcentralizadormes')
   findAllByIdObservaciones(@Param('idcentralizadormes') idcentralizadormes: string) {
      return   this.observacionesService.findAllByIdObservaciones(idcentralizadormes);
   }

   @Post()
    create( @Body() observacionesDto: CreateObservacionesDto) {
        console.log("entra a post");
        return this.observacionesService.create( observacionesDto); 
    }

   @Patch('/:idobservaciones')
    update(@Param('idobservaciones') idobservaciones: string, @Body() updateobservacionesDto: UpdateObservacionesDto) {
         return this.observacionesService.update(idobservaciones, updateobservacionesDto);
     }


     @Delete('/:idobservaciones')
     remove(@Param('idobservaciones') idobservaciones: string){
        console.log("aqui esta",idobservaciones);
        return this.observacionesService.remove(idobservaciones);
     }  

     
  



}
