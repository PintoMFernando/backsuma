import { Controller, Get, Param } from '@nestjs/common';
import { PuntoventaService } from './puntoventa.service';

@Controller('puntoventa')
export class PuntoventaController {

    constructor(private readonly puntoventaService: PuntoventaService){}
    

  @Get()
  findAll() {
    return this.puntoventaService.findAll();
  }
    
  
   
    @Get('/:idempresa')
    findOnepuntoventa(@Param('idempresa') idempresa: number) {
    return this.puntoventaService.findOnepuntoventa(idempresa);
    }






}
