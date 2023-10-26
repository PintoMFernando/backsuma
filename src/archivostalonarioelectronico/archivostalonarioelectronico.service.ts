import { Injectable } from '@nestjs/common';
import { UpdateArchivoTalonarioelectronicoDto } from './dto/updateArchivoTalonarioelectronico.dto';
import { CreateArchivoTalonarioelectronicoDto } from './dto/createArchivoTalonarioelectronico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Archivoelectronicotalonario } from './entites/archivotalonarioelectronico.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ArchivostalonarioelectronicoService {
    remove(idarchivotalonarioelectronico: string) {
        throw new Error('Method not implemented.');
    }
        
    constructor(
        @InjectRepository(Archivoelectronicotalonario)
        private readonly ventatalonarioRepository: Repository<Archivoelectronicotalonario>
      ) {}
   
    
    async create(createArchivotalonarioelectronicoDto: CreateArchivoTalonarioelectronicoDto) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.ventatalonarioRepository.save(createArchivotalonarioelectronicoDto);
      }


      async findAll(idventatalonario:string){
        return await this.ventatalonarioRepository.find();
      }
    
       
  async findAllByIdventatalonarioelectronico(idventatalonario:string){
  
  return await this.ventatalonarioRepository.find({
    where:{
      'ventatalonario':{idventatalonario:idventatalonario},  
    },
    relations:['ventatalonario']
  });
  }


 

  
  async update(idventatalonario:string,ventatalonarioDto:UpdateArchivoTalonarioelectronicoDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.ventatalonarioRepository.update(idventatalonario, ventatalonarioDto)

  }
}
