import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PuntoventaactividadService } from './puntoventaactividad.service';
import { UpdatePuntoventaactividadDto } from './dto/updatePuntoventaactividad.dto';
import { CreatePuntoventaactividadDto } from './dto/createPuntoventaactividad.dto';

@Controller('puntoventaactividad')
export class PuntoventaactividadController {

    constructor(private readonly puntoventaactividadService: PuntoventaactividadService){}

    @Get('/:idempresa')
    findAll(@Param('idempresa') idempresa: number) {
        console.log("entra la controlador");
       return   this.puntoventaactividadService.findAll(idempresa);
    }

    @Get('/:idactividades/:idpuntoventa')
    findAllbusqueda(@Param('idactividades') idactividades: number, @Param('idpuntoventa') idpuntoventa: number) {
        console.log("entra la controlador");
       return   this.puntoventaactividadService.findAllbusqueda(idactividades,idpuntoventa);
    }

   
    @Post()
     create( @Body() createmepsuntoventasumaDto: CreatePuntoventaactividadDto[]) {
        console.log("entra al psotsss");
         return this.puntoventaactividadService.create( createmepsuntoventasumaDto); 
     }

     
    @Patch('/:idpuntoventaactividad')
     update(@Param('idpuntoventaactividad') idpuntoventaactividad: string, @Body() updatecomprassumasDto: UpdatePuntoventaactividadDto ) {
          return this.puntoventaactividadService.update(idpuntoventaactividad, updatecomprassumasDto);
      }
 
 
      @Delete('/:idpuntoventaactividad')
      remove(@Param('idpuntoventaactividad') idpuntoventaactividad: string){
         console.log("aqui esta",idpuntoventaactividad);
         return this.puntoventaactividadService.remove(idpuntoventaactividad);
      }  
 
 

}
