import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArchivostalonarioelectronicoService } from './archivostalonarioelectronico.service';
import { CreateArchivoTalonarioelectronicoDto } from './dto/createArchivoTalonarioelectronico.dto';
import { UpdateArchivoTalonarioelectronicoDto } from './dto/updateArchivoTalonarioelectronico.dto';

@Controller('archivostalonarioelectronico')
export class ArchivostalonarioelectronicoController {

    constructor(private readonly archivotalonarioelectronicoService: ArchivostalonarioelectronicoService){}


    @Get('/:idarchivotalonarioelectronico')
    findAllByIdventatalonario(@Param('idarchivotalonarioelectronico') idarchivotalonarioelectronico: string) {
       return   this.archivotalonarioelectronicoService.findAllByIdventatalonarioelectronico(idarchivotalonarioelectronico);
    }
 
    @Post()
     create( @Body() archivotalonarioelectronicoDto: CreateArchivoTalonarioelectronicoDto) {
        console.log("entra al psotsss");
         return this.archivotalonarioelectronicoService.create( archivotalonarioelectronicoDto); 
     }

     
    @Patch('/:idarchivotalonarioelectronico')
     update(@Param('idarchivotalonarioelectronico') idarchivotalonarioelectronico: string, @Body() updatearchivotalonarioelectronicoDto: UpdateArchivoTalonarioelectronicoDto) {
          return this.archivotalonarioelectronicoService.update(idarchivotalonarioelectronico, updatearchivotalonarioelectronicoDto);
      }
 
 
      @Delete('/:idarchivotalonarioelectronico')
      remove(@Param('idarchivotalonarioelectronico') idarchivotalonarioelectronico: string){
         console.log("aqui esta",idarchivotalonarioelectronico);
         return this.archivotalonarioelectronicoService.remove(idarchivotalonarioelectronico);
      }  

}
