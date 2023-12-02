import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArchivostalonarioelectronicoService } from './archivostalonarioelectronico.service';
import { CreateArchivoTalonarioelectronicoDto } from './dto/createArchivoTalonarioelectronico.dto';
import { UpdateArchivoTalonarioelectronicoDto } from './dto/updateArchivoTalonarioelectronico.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameFile ,fileFilter} from './archivo.helper';

@Controller('archivostalonarioelectronico')
export class ArchivostalonarioelectronicoController {

    constructor(private readonly archivotalonarioelectronicoService: ArchivostalonarioelectronicoService){}


    
    @Get('/:idarchivotalonarioelectronico')
    findAllByIdventatalonario(@Param('idarchivotalonarioelectronico') idarchivotalonarioelectronico: string) {
       return   this.archivotalonarioelectronicoService.findAllByIdventatalonarioelectronico(idarchivotalonarioelectronico);
    }

    @Get('/:idpuntoactividad/:idcentralizadormes/:tipo')
    findBusqueda(@Param('idpuntoactividad') idpuntoactividad: string,@Param('idcentralizadormes') idcentralizadormes: string,@Param('tipo') tipo: number) {
       return   this.archivotalonarioelectronicoService.findBusqueda(idpuntoactividad,idcentralizadormes,tipo);
    }


 
    @Post()
    @UseInterceptors(FileInterceptor('file',{
            storage: diskStorage({
            destination: './upload',
            filename: renameFile
           }),
           fileFilter: fileFilter
      
    }))
    async uploadFile(@UploadedFile() file:  Express.Multer.File, @Body() uploadDto: CreateArchivoTalonarioelectronicoDto) {
        console.log("ENTRA  MI SERVICIOOOOOOOOOO")
      try {
         if (file) {
             uploadDto.filename = file.filename;
             return await this.archivotalonarioelectronicoService.create(uploadDto);
         }
     } catch (error) {
         console.error("Error en el controlador:", error);
         throw error;
     }
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
