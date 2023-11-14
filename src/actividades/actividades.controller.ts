import { Controller, Get, Param } from '@nestjs/common';
import { ActividadesService } from './actividades.service';

@Controller('actividades')
export class ActividadesController {

    constructor(private readonly actividadesService: ActividadesService){}
    
   
  @Get('/tipo')
      async getactividades(){
         return await this.actividadesService.getactividades();
     }

     @Get('/seccion/:seccion')
      async getactividadesseccion(@Param('seccion') seccion:string){
         return await this.actividadesService.getactividadesseccion(seccion);
     }
    

     @Get('/division/:seccion/:division')
     async getactividadesdivision(@Param('seccion') seccion:string,@Param('division') division:number){
        return await this.actividadesService.getactividadesdivision(seccion,division);
    }

  

    
     
}
