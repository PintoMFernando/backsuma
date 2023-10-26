import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comprassumasdetalle } from './entities/comprassumasdetalle.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateComprassumasdetalleDto } from './dto/createComprassumasdetalle.dto';
import { UpdateComprassumasdetalleDto } from './dto/updateComprassumasdetalle.dto';

@Injectable()
export class ComprassumasdetalleService {
   
    constructor(
        @InjectRepository(Comprassumasdetalle)
        private readonly comprassumasdetalleRepository: Repository<Comprassumasdetalle>
      ) {}
    
  
      async create(createcomprassumasdetalleDto: CreateComprassumasdetalleDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.comprassumasdetalleRepository.save(createcomprassumasdetalleDto);
      }

     
       
  async findAllByIdcomprassumasdetalle(idcomprasuma:string){
  
  return await this.comprassumasdetalleRepository.find({
    where:{
      'comprassumas':{idcomprasuma:idcomprasuma},  
    },
    relations:['comprassumas']
  });
  }

  async update(idcomprassumasdetalle:string, comprassumasdetalleDto: UpdateComprassumasdetalleDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.comprassumasdetalleRepository.update(idcomprassumasdetalle, comprassumasdetalleDto)

  }
  
 

  async remove(idcomprasumadetalle:string){
    return await this.comprassumasdetalleRepository.softDelete({idcomprasumadetalle});
  }


}
