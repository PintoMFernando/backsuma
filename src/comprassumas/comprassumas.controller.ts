import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ComprassumasService } from './comprassumas.service';
import { CreateComprassumasDto } from './dto/createComprassumas.dto';
import { UpdateComprassumasDto } from './dto/updateComprassumas.dto';
import { Comprassumas } from './entities/comprassumas.entity';

@Controller('comprassumas')
export class ComprassumasController {



    constructor(private readonly comprassumasService: ComprassumasService){}


   /* @Get('/:idcentralizadormes')
    findAllByIdventatalonario(@Param('idcentralizadormes') idcentralizadormes: string) {
       return   this.comprassumasService.findAllByIdcomprassumas(idcentralizadormes);
    }
    */
    @Get('comprassumas/:idcomprasuma')
    
    find(@Param('idcomprasuma') idcomprasuma: string) {
        console.log("entra la controlador");
       return   this.comprassumasService.find(idcomprasuma);
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
