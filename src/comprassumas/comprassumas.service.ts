import { Injectable } from '@nestjs/common';
import { UpdateComprassumasDto } from './dto/updateComprassumas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Comprassumas } from './entities/comprassumas.entity';
import { CreateComprassumasDto } from './dto/createComprassumas.dto';

@Injectable()
export class ComprassumasService {
   
   
    constructor(
        @InjectRepository(Comprassumas)
        private readonly comprassumasRepository: Repository<Comprassumas>
      ) {}
    
  
      async create(createcomprassumasDto: CreateComprassumasDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.comprassumasRepository.save(createcomprassumasDto);
      }

      async findAll(idventatalonario:string){
        return await this.comprassumasRepository.find();
      }
    
       
  async findAllByIdcomprassumas(idpuntoventa:number){
  
  return await this.comprassumasRepository.find({
    where:{
      'puntoventa':{idpuntoventa:idpuntoventa},  
    },
    relations:['puntoventa']
  });
  }

  async update(idcomprassumas:string, comprassumasDto: UpdateComprassumasDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.comprassumasRepository.update(idcomprassumas, comprassumasDto)

  }
  
 

  async remove(idcomprasuma:string){
    return await this.comprassumasRepository.softDelete({idcomprasuma});
  }



}
