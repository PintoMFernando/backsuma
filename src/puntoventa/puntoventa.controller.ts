import { Controller, Get, Param } from '@nestjs/common';
import { PuntoventaService } from './puntoventa.service';

@Controller('puntoventa')
export class PuntoventaController {

    constructor(private readonly puntoventaService: PuntoventaService){}
    

    @Get('/:idempresa')
    findAll(@Param('idempresa') idempresa: number) {
        console.log("entra la controlador");
       return   this.puntoventaService.findAll(idempresa);
    }
  
    
  
   
    @Get('/:idempresa')
    findOnepuntoventa(@Param('idempresa') idempresa: number) {
    return this.puntoventaService.findOnepuntoventa(idempresa);
    }


    
    @Get('/todoventa/:idempresa/:idcentralizadormes')
    findTodoVenta(@Param('idempresa') idempresa: number,@Param('idcentralizadormes') idcentralizadormes: string) {
    return this.puntoventaService.findTodoVenta(idempresa,idcentralizadormes );
    }





}
