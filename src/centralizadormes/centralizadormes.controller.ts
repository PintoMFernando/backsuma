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


       
   /*  @Get('/:idcentralizadormes/:mes/:idempresa/:anio')
     updateCaclulosCentrlizadorMes(@Param('idcentralizadormes') idcentralizadormes: string,
     @Param('mes') mes: number,
     @Param('idempresa') idempresa: number,
     @Param('anio') anio: number,
     @Body() updateEmpresaDto: UpdateCentralizadorMesDto) {
     return this.centralizadormesService.updateCaclulosCentrlizadorMes(idcentralizadormes,mes,idempresa,anio, updateEmpresaDto);
    }*/


    
   @Get('calculos/:idcentralizadormes/:mes/:idempresa/:anio')
    
   findAllCaclulosCentralizadormes(
  @Param('idcentralizadormes') idcentralizadormes: string,
  @Param('mes') mes: number,
   @Param('idempresa') idempresa: number,
   @Param('anio') anio: number,) {
    console.log("entraaaa controlador")
     return   this.centralizadormesService.findAllCaclulosCentralizadormes(idcentralizadormes,mes,idempresa,anio);
  }


      
  @Get('calculoscompras/:idcentralizadormes')
    
  findAllCaclulosCentralizadormescompras(
 @Param('idcentralizadormes') idcentralizadormes: string) {
  console.log("mi id centralziadoremes",idcentralizadormes)
    return   this.centralizadormesService.findAllCaclulosCentralizadormescompras(idcentralizadormes);
 }


 @Get('calculosiva/:idcentralizadormes/:mes/:anio/:id_empresa')
    
 findAllCaclulosCentralizadormesiva(
@Param('idcentralizadormes') idcentralizadormes: string,
@Param('mes') mes: number,
@Param('anio') anio: number,
@Param('id_empresa') id_empresa: number,
) {
 
   return   this.centralizadormesService.findAllCaclulosCentralizadormesiva(idcentralizadormes,mes,anio,id_empresa);
}



@Get('calculosit/:idcentralizadormes')
    
 findAllCaclulosCentralizadormesit(
@Param('idcentralizadormes') idcentralizadormes: string) {
 
   return   this.centralizadormesService.findAllCaclulosCentralizadormesit(idcentralizadormes);
}





@Get('calculosivasaldoiva/:idcentralizadormes/:ivaimpuestos/')
    
findAllCaclulosCentralizadormesivaimpuestossaldoiva(
@Param('idcentralizadormes') idcentralizadormes: string,
@Param('ivaimpuestos') ivaimpuestos: number,

) {

  return   this.centralizadormesService.findAllCaclulosCentralizadormesivaimpuestossaldoiva(idcentralizadormes,ivaimpuestos);
}




@Get('calculositsaldoiue/:idcentralizadormes/:saldoiue/:mes/:anio/:id_empresa')
    
findAllCaclulosCentralizadormesitimpuestossaldoiue(
@Param('idcentralizadormes') idcentralizadormes: string,
@Param('saldoiue') saldoiue: number,
@Param('mes') mes: number,
@Param('anio') anio: number,
@Param('id_empresa') id_empresa: number,

) {

  return   this.centralizadormesService.findAllCaclulosCentralizadormesitimpuestossaldoiue(idcentralizadormes,saldoiue,mes,anio,id_empresa);
}





@Get('calculoscentralizadormesotros/:idcentralizadormes/')
    
   findAllCaclulosCentralizadormesotros(
  @Param('idcentralizadormes') idcentralizadormes: string,
  ) {
    console.log("entraaaa controlador")
     return   this.centralizadormesService.findAllCaclulosCentralizadormesotros(idcentralizadormes);
  }




  @Get('calculoscentralizadormestotal/:idcentralizadormes/')
    
  findAllCaclulosCentralizadormestotal(
 @Param('idcentralizadormes') idcentralizadormes: string,
 ) {
   console.log("entraaaa controlador")
    return   this.centralizadormesService.findAllCaclulosCentralizadormestotal(idcentralizadormes);
 }


     
 @Get('calculoscentralizadormestotaltodo/:idcentralizadormes/')
    
  findAllCaclulosCentralizadormestodototal(
 @Param('idcentralizadormes') idcentralizadormes: string,
 ) {
   console.log("entraaaa controlador")
    return   this.centralizadormesService.findAllCaclulosCentralizadormestodototal(idcentralizadormes);
 }


     

    
 @Get('traermisdatossucursales/:idcentralizadormes/')
    
  findAlldatoscentralizadorsucursales(
 @Param('idcentralizadormes') idcentralizadormes: string,
 ) {
   console.log("entraaaa controlador")
    return   this.centralizadormesService.findAlldatoscentralizadorsucursales(idcentralizadormes);
 }


 @Get('traermisdatostiposcompras/:idcentralizadormes/')
    
 findAlldatoscentralizadortiposcompras(
@Param('idcentralizadormes') idcentralizadormes: string,
) {
 
   return   this.centralizadormesService.findAlldatoscentralizadortiposcompras(idcentralizadormes);
}



@Get('traermisdatostotal/:idcentralizadormes/')
    
findAlldatoscentralizadortotal(
@Param('idcentralizadormes') idcentralizadormes: string,
) {

  return   this.centralizadormesService.findAlldatoscentralizadortotal(idcentralizadormes);
}


   

   

  
  



}
