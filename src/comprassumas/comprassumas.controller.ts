import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ComprassumasService } from './comprassumas.service';
import { CreateComprassumasDto } from './dto/createComprassumas.dto';
import { UpdateComprassumasDto } from './dto/updateComprassumas.dto';

@Controller('comprassumas')
export class ComprassumasController {



    constructor(private readonly comprassumasService: ComprassumasService){}


    @Get('/:idpuntoventa')
    findAllByIdventatalonario(@Param('idpuntoventa') idpuntoventa: number) {
       return   this.comprassumasService.findAllByIdcomprassumas(idpuntoventa);
    }
 
    @Post()
     create( @Body() comprasssumasDto: CreateComprassumasDto[]) {
        console.log("entra al psotsss");
         return this.comprassumasService.create( comprasssumasDto); 
     }

     
    @Patch('/:idcomprassumas')
     update(@Param('idcomprassumas') idcomprassumas: string, @Body() updatecomprassumasDto: UpdateComprassumasDto) {
          return this.comprassumasService.update(idcomprassumas, updatecomprassumasDto);
      }
 
 
      @Delete('/:idcomprasuma')
      remove(@Param('idcomprasuma') idcomprasuma: string){
         console.log("aqui esta",idcomprasuma);
         return this.comprassumasService.remove(idcomprasuma);
      }  
 
      
}
