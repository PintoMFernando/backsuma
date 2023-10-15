import { Injectable } from '@nestjs/common';
import { UpdateObservacionesDto } from './dto/updateObservaciones.dto';
import { Observaciones } from './entities/observaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateObservacionesDto } from './dto/createObservaciones.dto';

@Injectable()
export class ObservacionesService {


    constructor(
        @InjectRepository(Observaciones)
        private readonly observacionesRepository: Repository<Observaciones>
      ) {}
    
      async create(createobservacionesDto: CreateObservacionesDto){
        return await this.observacionesRepository.save(createobservacionesDto);
      }
      
    
      async findAll(idcentralizadormes:string){
        return await this.observacionesRepository.find();
      }
    
       
  async findAllByIdObservaciones(idcentralizadormes:string){
  
  return await this.observacionesRepository.find({
    where:{
      'centralizadormes':{idcentralizadormes:idcentralizadormes},  
    },
    relations:['centralizadormes']
  });


  }
  
  async update(idcentralizadormes:string,observacionessDto:UpdateObservacionesDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.observacionesRepository.update(idcentralizadormes, observacionessDto)

  }


  async remove(idobservaciones:string){
    return await this.observacionesRepository.softDelete({idobservaciones});
  }


}
