import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CobroService } from './cobro.service';
import { CreateCobroDto } from './dto/createCobro.dto';
import { UpdateCobroDto } from './dto/updateCobro.dto';

@Controller('cobro')
export class CobroController {


    constructor(private readonly cobroService: CobroService){}

    @Post()
    create( @Body() cobroDto: CreateCobroDto) {

        return this.cobroService.create( cobroDto);
        
       
    }

   
  // @Get('tablacentralizador/:id_dato/:anio')ddi
    
    //findAll(@Param('id_dato') id_dato: string,@Param('anio') anio: string) {
    
     // return   this.cobroService.findAllByIdCentralizador(id_dato,anio);
   //}


  // @Get('tablacentralizador/:id_dato')
    
   //findAllPrincipio(@Param('id_dato') id_dato: number) {
     
    // return   this.cobroService.findAllByIdCentralizadorPrincipio(id_dato);
 // }

  //
     // @Patch('/:id_dato')
     // update(@Param('id_dato') id_dato: string, @Body() updateEmpresaDto: UpdateCobroDto) {
    //  return this.cobroService.update(id_dato, updateEmpresaDto);
   //  }
  
  




}
