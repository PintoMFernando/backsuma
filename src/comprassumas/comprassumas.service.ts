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

      

      async find(idcomprasuma:string){
        console.log("entra la servicio");
        return await this.comprassumasRepository.find({
          where:{
            idcomprasuma: idcomprasuma
          },
          relations: ['comprassumasdetalle'],
        });
        }

        

       
  /*async findAllByIdcomprassumas(idcentralizadormes:string){
  
  return await this.comprassumasRepository.find({
    where:{
      'centralizadormes':{idcentralizadormes:idcentralizadormes},  
    },
    relations:['centralizadormes']
  });
  }
*/
  async update(idcomprassumas:string, comprassumasDto: UpdateComprassumasDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.comprassumasRepository.update(idcomprassumas, comprassumasDto)

  }
  
 

  async remove(idcomprasuma:string){
    return await this.comprassumasRepository.delete({idcomprasuma});
  }



}
