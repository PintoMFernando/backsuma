import { Injectable } from '@nestjs/common';
import { CreateEmpresadatosinicialesDto } from './dto/createEmpresadatosiniciales.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Empresadatosiniciales } from './entities/empresadatosiniciales.entity';
import { UpdateEmpresadatosinicialesDto } from './dto/updateEmpresadatosiniciales.dto';

@Injectable()
export class EmpresadatosinicialesService {
   
    constructor(
        @InjectRepository(Empresadatosiniciales)
        private readonly empresadatosinicialesRepository: Repository<Empresadatosiniciales>
      ) {}

    async create(createdatoEmpresadatosinicialesDto: CreateEmpresadatosinicialesDto){

        return await this.empresadatosinicialesRepository.save(createdatoEmpresadatosinicialesDto);
      }

      async findAllByIdempresadatosini(idempresa:number){
  
        return await this.empresadatosinicialesRepository.find({
          where:{
            'empresa':{idempresa:idempresa},  
          },
          relations:['empresa']
        });
        }

        async update(idempresadatosiniciales:string,updateempresadatosinicialDto:UpdateEmpresadatosinicialesDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
   
            return await this.empresadatosinicialesRepository.update(idempresadatosiniciales, updateempresadatosinicialDto)
        
          }
        
      
      
      
    
}
