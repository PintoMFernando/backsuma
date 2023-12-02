import { Injectable, UploadedFile } from '@nestjs/common';
import { UpdateArchivoTalonarioelectronicoDto } from './dto/updateArchivoTalonarioelectronico.dto';
import { CreateArchivoTalonarioelectronicoDto } from './dto/createArchivoTalonarioelectronico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Archivoelectronicotalonario } from './entites/archivotalonarioelectronico.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ArchivostalonarioelectronicoService {
   
    constructor(
        @InjectRepository(Archivoelectronicotalonario)
        private readonly archivoselectronicosRepository: Repository<Archivoelectronicotalonario>
      ) {}
   
    
    async create(createArchivotalonarioelectronicoDto: CreateArchivoTalonarioelectronicoDto) {
      // createArchivotalonarioelectronicoDto.file = filename;
            
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.archivoselectronicosRepository.save(createArchivotalonarioelectronicoDto);
      }




      async findAll(idventatalonario:string){
        
        return await this.archivoselectronicosRepository.find();
      }
    
       
  async findAllByIdventatalonarioelectronico(idventatalonario:string){
  
  return await this.archivoselectronicosRepository.find({
    where:{
      'ventatalonario':{idventatalonario:idventatalonario,
        
      
      
      },  
      
    },
    relations:['ventatalonario']
  });
  }

  async findBusqueda(idpuntoventaactividad:string,idcentralizadormes:string,tipo:number){

   return await this.archivoselectronicosRepository.find({
      where:{
        'ventatalonario':{
        idpuntoventaactividad:idpuntoventaactividad,  
        idcentralizadormes:idcentralizadormes,
        tipo:tipo,
      },
  

    },
    relations:['ventatalonario']
  });
}

        



 

  
  async update(idventatalonario:string,ventatalonarioDto:UpdateArchivoTalonarioelectronicoDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.archivoselectronicosRepository.update(idventatalonario, ventatalonarioDto)

  }

  async remove(idventatalonario:string){
    return await this.archivoselectronicosRepository.delete(idventatalonario);
  }
   


}
