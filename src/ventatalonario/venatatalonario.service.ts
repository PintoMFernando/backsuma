import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ventatalonario } from './entities/ventatalonario.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';

@Injectable()
export class VenatatalonarioService {
    createDocument(name: any, filePath: string) {
        throw new Error('Method not implemented.');
    }
    remove(idobservaciones: string) {
        throw new Error('Method not implemented.');
    }
    
    constructor(
        @InjectRepository(Ventatalonario)
        private readonly ventatalonarioRepository: Repository<Ventatalonario>
      ) {}
    
  
      async create(createVentaTalonarioDto: CreateVentaTalonarioDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.ventatalonarioRepository.save(createVentaTalonarioDto);
      }


     
      
    
      
    
      async findAll(idventatalonario:string){
        return await this.ventatalonarioRepository.find();
      }
    
       
  async findAllByIdventatalonario(idpuntoventa:number){
  
  return await this.ventatalonarioRepository.find({
    where:{
      'puntoventa':{idpuntoventa:idpuntoventa},  
    },
    relations:['puntoventa']
  });
  }


 

  
  async update(idventatalonario:string,ventatalonarioDto:UpdateVentaTalonarioDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.ventatalonarioRepository.update(idventatalonario, ventatalonarioDto)

  }


 /* async remove(id:string){
    return await this.ventatalonarioRepository.softDelete({id});
  }
   */ 
}
