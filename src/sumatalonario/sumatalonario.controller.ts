import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SumatalonarioService } from './sumatalonario.service';
import { CreateSumaTalonarioDto } from './dto/createSumaTalonario.dto';
import { UpdateSumaTalonarioDto } from './dto/updateSumaTalonario.dto';

@Controller('sumatalonario')
export class SumatalonarioController {

    constructor(private readonly sumatalonarioService: SumatalonarioService){}


    @Get('/:idsumatalonario')
    findAllByIdsumatalonario(@Param('idsumatalonario') idsumatalonario: string) {
       return   this.sumatalonarioService.findAllByIdsumatalonario(idsumatalonario);
    }
 
    @Post()
     create( @Body() sumatalonarioDto: CreateSumaTalonarioDto[]) {
         console.log("entra a postse sumas");
         return this.sumatalonarioService.create( sumatalonarioDto); 
     }
    



    @Patch('/:idsumatalonario')
     update(@Param('idsumatalonario') idsumatalonario: string, @Body() updateobservacionesDto: UpdateSumaTalonarioDto) {
          return this.sumatalonarioService.update(idsumatalonario, updateobservacionesDto);
      }
 
 
      @Delete('/:idobservaciones')
      remove(@Param('idobservaciones') idobservaciones: string){
         console.log("aqui esta",idobservaciones);
         return this.sumatalonarioService.remove(idobservaciones);
      }  
 
      
  

}
