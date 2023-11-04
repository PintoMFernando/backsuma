import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MespuntoventasumaService } from './mespuntoventasuma.service';
import {   UpdateMespuntoventasumaDto } from './DTO/updateMespuntoventasuma.dto';
import { CreateMespuntoventasumaDto } from './DTO/createMespuntoventasuma.dto';


@Controller('mespuntoventasuma')
export class MespuntoventasumaController {


    constructor(private readonly mespuntoventasumaService: MespuntoventasumaService){}

     @Get('/:idcentralizadormes')
     
     findAll(@Param('idcentralizadormes') idcentralizadormes: string) {
         console.log("entra la controlador");
        return   this.mespuntoventasumaService.findAll(idcentralizadormes);
     }
  
     @Post()
      create( @Body() createmepsuntoventasumaDto: CreateMespuntoventasumaDto[]) {
         console.log("entra al psotsss");
          return this.mespuntoventasumaService.create( createmepsuntoventasumaDto); 
      }
 
      
     @Patch('/:idmespuntoventassuma')
      update(@Param('idmespuntoventassuma') idmespuntoventasuma: string, @Body() updatecomprassumasDto: UpdateMespuntoventasumaDto ) {
           return this.mespuntoventasumaService.update(idmespuntoventasuma, updatecomprassumasDto);
       }
  
  
       @Delete('/:idmespuntoventassuma')
       remove(@Param('idmespuntoventassuma') idmespuntoventassuma: string){
          console.log("aqui esta",idmespuntoventassuma);
          return this.mespuntoventasumaService.remove(idmespuntoventassuma);
       }  
  

}
