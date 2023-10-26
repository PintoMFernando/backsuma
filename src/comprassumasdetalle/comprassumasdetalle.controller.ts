import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ComprassumasdetalleService } from './comprassumasdetalle.service';
import { CreateComprassumasdetalleDto } from './dto/createComprassumasdetalle.dto';
import { UpdateComprassumasdetalleDto } from './dto/updateComprassumasdetalle.dto';

@Controller('comprassumasdetalle')
export class ComprassumasdetalleController {

    constructor(private readonly comprassumasdetalleService: ComprassumasdetalleService){}


    @Get('/:idcomprassumas')
    findAllByIdventatalonario(@Param('idcomprassumas') idcomprassumas: string) {
       return   this.comprassumasdetalleService.findAllByIdcomprassumasdetalle(idcomprassumas);
    }
 
    @Post()
     create( @Body() comprasssumasdetalleDto: CreateComprassumasdetalleDto[]) {
        console.log("entra al psotsss");
         return this.comprassumasdetalleService.create( comprasssumasdetalleDto); 
     }

     
    @Patch('/:idcomprassumasdetalle')
     update(@Param('idcomprassumasdetalle') idcomprassumasdetalle: string, @Body() updatecomprassumasDto: UpdateComprassumasdetalleDto) {
          return this.comprassumasdetalleService.update(idcomprassumasdetalle, updatecomprassumasDto);
      }
 
 
      @Delete('/:idcomprassumasdetalle')
      remove(@Param('idcomprassumasdetalle') idcomprassumasdetalle: string){
         console.log("aqui esta",idcomprassumasdetalle);
         return this.comprassumasdetalleService.remove(idcomprassumasdetalle);
      }  
 


}
