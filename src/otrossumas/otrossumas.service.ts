import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Otrossumas } from './entities/otrossumas.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateOtrossumasDto } from './dto/createOtrossumas.dto';
import { UpdateOtrossumasDto } from './dto/updateOtrossumas.dto';

@Injectable()
export class OtrossumasService {
    constructor(
        
        @InjectRepository(Otrossumas)
        private readonly otrossumasRepository: Repository<Otrossumas>
        
       
     
     
        ) {}
    
  
      async create(createotrossumasDto: CreateOtrossumasDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.otrossumasRepository.save(createotrossumasDto);
      }

     
       
  async findAllByIdotrossumas(idcentralizadormes:string){
  
  return await this.otrossumasRepository.find({
    where:{
        idcentralizadormes: idcentralizadormes
      },
      relations: ['centralizadormes'],
  });
  }

 

  async findAll(idcentralizadormes:string){
    return await this.otrossumasRepository.find({
        where: { idcentralizadormes: idcentralizadormes }
    });
    }


  async update(idotrossumas:string, otrossumasDto: UpdateOtrossumasDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.otrossumasRepository.update(idotrossumas, otrossumasDto)

  }
  
 

 async remove(idcentralizadormes:string){
    return await this.otrossumasRepository.delete({idcentralizadormes:idcentralizadormes}); //elimina todos los datos, cambiamos softdelete por delete
  }

}
