import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Mespuntoventasuma } from './entities/mespuntoventasuma.entity';
import { UpdateMespuntoventasumaDto } from './DTO/updateMespuntoventasuma.dto';
import { CreateMespuntoventasumaDto } from './DTO/createMespuntoventasuma.dto';


@Injectable()
export class MespuntoventasumaService {
   
    constructor(
        @InjectRepository(Mespuntoventasuma)
        private readonly comprassumasRepository: Repository<Mespuntoventasuma>
      ) {}
    
  
     async create(createmespuntoventassumadto: CreateMespuntoventasumaDto[]) {
               // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
       return await this.comprassumasRepository.save(createmespuntoventassumadto);
      }

      

      async find(idmespuntoventassuma:string){
        console.log("entra la servicio");
        return await this.comprassumasRepository.find({
          where:{
            idmespuntoventasuma: idmespuntoventassuma
          },
          relations: ['comprassumasdetalle'],
        });
        }

        

       
  async findAllByIdcomprassumas(idcentralizadormes:string,idpuntoventa:number){
  
  return await this.comprassumasRepository.find({
    where:{
      idcentralizadormes:idcentralizadormes,
      idpuntoventa:idpuntoventa  
    },
    relations:['centralizadormes','puntoventa']
  });
  }

  async update(idmespuntoventassuma:string, updatemespuntoventasumaDto: UpdateMespuntoventasumaDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.comprassumasRepository.update(idmespuntoventassuma, updatemespuntoventasumaDto)

  }
  
 

  async remove(idmespuntoventassuma:string){
    return await this.comprassumasRepository.softDelete(idmespuntoventassuma);
  }

}
