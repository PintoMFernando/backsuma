import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EmpresadatosinicialesService } from './empresadatosiniciales.service';
import { CreateEmpresadatosinicialesDto } from './dto/createEmpresadatosiniciales.dto';
import { UpdateEmpresadatosinicialesDto } from './dto/updateEmpresadatosiniciales.dto';

@Controller('empresadatosiniciales')
export class EmpresadatosinicialesController {

    constructor(private readonly empresadatosinicialesService: EmpresadatosinicialesService){}
    
  @Post()
    create( @Body() createdatoEmpresadatosinicialesDto: CreateEmpresadatosinicialesDto) {
      
        return this.empresadatosinicialesService.create( createdatoEmpresadatosinicialesDto);
      
    }
   
   
    @Get('/:idempresa')
    findAllByIdempresadatosini(@Param('idempresa') idempresa: number) {
       return   this.empresadatosinicialesService.findAllByIdempresadatosini(idempresa);
    }

    
    @Patch('/:idempresa')
    update(@Param('idempresa') idempresa: string, @Body() updateEmpresadatosinicialDto: UpdateEmpresadatosinicialesDto) {
    return this.empresadatosinicialesService.update(idempresa, updateEmpresadatosinicialDto);
   }







}
