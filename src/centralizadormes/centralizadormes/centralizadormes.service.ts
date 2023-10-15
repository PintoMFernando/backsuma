import { Injectable } from '@nestjs/common';
import { Centralizadormes } from './entities/centralizadormes.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCentralizadorMesDto } from './dto/createCentralizadorMes.dto';
import { UpdateCentralizadorMesDto } from './dto/updateCentralizadorMes.dto';
import { UpdateDatoEmpresaDto } from 'src/centralizador/dto/updateDatoEmpresa.dto';


@Injectable()
export class CentralizadormesService {

    constructor(
        @InjectRepository(Centralizadormes)
        private readonly centralizadormesRepository: Repository<Centralizadormes>
      ) {}
    
    

      async create(createcentralizadorDto: CreateCentralizadorMesDto){
   
    

        return await this.centralizadormesRepository.save(createcentralizadorDto);
      }
      
    
      async findAll(){
        return await this.centralizadormesRepository.find();
      }
    
       
  async findAllByIdCentralizador(id_dato:number, anio){
  
  return await this.centralizadormesRepository.find({
    where:{
      'centralizador':{id_empresa:id_dato,anio:anio },
    },
    order: {
      mes: 'ASC' // esto me trae ordenado por meses porque al omento de llamar me traia desordenado
    },
    
    relations:['centralizador']
  });


  }

  async findAllByIdCentralizadormes(idcentralizadormes:string){
    return await this.centralizadormesRepository.findOneBy({idcentralizadormes});
  
    }



  

  async update(idcentralizadormes:string,updatecentralizadormesDto:UpdateCentralizadorMesDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
   
    return await this.centralizadormesRepository.update(idcentralizadormes, updatecentralizadormesDto)

  }


}
