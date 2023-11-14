import { Body, Controller, Get, HttpStatus, Param, Patch ,Post, Res} from '@nestjs/common';
import { CentralizadorService } from './centralizador.service';
import { UpdateDatoEmpresaDto } from './dto/updateDatoEmpresa.dto';
import { UUID } from 'crypto';
import { CreateDatoEmpresaDto } from './dto/createDatoEmpresa.dto';
import { Response } from 'express';

@Controller('centralizador')
export class CentralizadorController {
    constructor(private readonly centralizadorService: CentralizadorService){}
    
  @Post()
    create( @Body() createdatoEmpresaDto: CreateDatoEmpresaDto) {
      
        return this.centralizadorService.create( createdatoEmpresaDto);
      
    }
   
   /* @Get('tablacentralizador/:idcentralizador')                                    //este es el controlador
    findAll(@Param('idcentralizador') idcentralizador: string) {
      
      return   this.centralizadorService.findAllByIdEmpresa(idcentralizador);
    }
/*


   /* @Get('tablacentralizadorbuscar/:id_dato/:anio')   intento de man dar un boolena

    async findAllbusqueda(@Param('id_dato') id_dato: number,@Param('anio') anio: number,@Res() res: Response,): Promise<void> {

      const existe = await this.centralizadorService.busquedatablacentralizador(id_dato, anio);
      res.status(200).json({existe});
     // dreturn   this.centralizadorService.findAllByIdCentralizadorBusqueda(id_dato,anio);
   }
*/

@Get('tablacentralizadorbuscar/:id_dato/:anio')
    async findAllbusqueda(@Param('id_dato') id_dato: number,@Param('anio') anio: number){

       return await this.centralizadorService.busquedatablacentralizador(id_dato, anio);
      
     // dreturn   this.centralizadorService.findAllByIdCentralizadorBusqueda(id_dato,anio);
   }


  
      @Get('/:idcentralizador')
     findOne(@Param('idcentralizador') idcentralizador: string) {
      return this.centralizadorService.findOne(idcentralizador);
      }
  
      @Patch('/:idcentralizador')
      update(@Param('idcentralizador') idcentralizador: string, @Body() updateEmpresaDto: UpdateDatoEmpresaDto) {
      return this.centralizadorService.update(idcentralizador, updateEmpresaDto);
     }
  
  
}
