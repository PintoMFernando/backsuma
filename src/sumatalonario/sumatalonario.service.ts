import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sumatalonario } from './entities/sumatalonario.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateSumaTalonarioDto } from './dto/createSumaTalonario.dto';
import { UpdateSumaTalonarioDto } from './dto/updateSumaTalonario.dto';

@Injectable()
export class SumatalonarioService {

   
    constructor(
        @InjectRepository(Sumatalonario)
        private readonly sumatalonarioRepository: Repository<Sumatalonario>
      ) {}
    
      async create(createsumaatalonarioDto: CreateSumaTalonarioDto){
        return await this.sumatalonarioRepository.save(createsumaatalonarioDto);
      }
      
    
      async findAll(idventatalonario:string){
        return await this.sumatalonarioRepository.find();
      }
    
       
  async findAllByIdsumatalonario(idventatalonario:string){
  
  return await this.sumatalonarioRepository.find({
    where:{
      'ventatalonario':{idventatalonario:idventatalonario},  
    },
    relations:['ventatalonario']
  });


  }
  
  async update(idsumatalonario:string,sumatalonariosDto:UpdateSumaTalonarioDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.sumatalonarioRepository.update(idsumatalonario, sumatalonariosDto)
  
  }

  remove(idobservaciones: string) {
    throw new Error('Method not implemented.');
}




 

}
