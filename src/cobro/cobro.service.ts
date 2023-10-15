import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cobro } from './entities/cobro.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateCobroDto } from './dto/createCobro.dto';
import { UpdateCobroDto } from './dto/updateCobro.dto';

@Injectable()
export class CobroService {
    constructor(
        @InjectRepository(Cobro)
        private readonly cobroRepository: Repository<Cobro>
      ) {}
    
    

      async create(createcobroDto: CreateCobroDto){
   
        //const dato = this.empresadatoRepository.create(createdatoEmpresaDto);

        return await this.cobroRepository.save(createcobroDto);
      }
      
    
      async findAll(){
        return await this.cobroRepository.find();
      }
    
       


  /*async findAllByIdCentralizadorPrincipio(id_dato:number){
    const fecha = new Date();
    const anioactual = fecha.getFullYear();
    return await this.centralizadormesRepository.find({
      where:{
        centralizador:{id_empresa:id_dato,anio: anioactual },
        
        
      },
      
      relations:['centralizador']
    });
  
  
    }*/



  

  //async update(id_dato:string,updatecobroDto:UpdateCobroDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
   
    //return await this.cobroRepository.update(id_dato, updatecobroDto)

  //}

}
