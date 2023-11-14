import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Mespuntoventasuma } from './entities/mespuntoventasuma.entity';
import { UpdateMespuntoventasumaDto } from './DTO/updateMespuntoventasuma.dto';
import { CreateMespuntoventasumaDto } from './DTO/createMespuntoventasuma.dto';
import { Puntoventa } from 'src/puntoventa/entities/puntoventa.entity';
import { PuntoventaService } from 'src/puntoventa/puntoventa.service';


@Injectable()
export class MespuntoventasumaService {
   
    constructor(
        @InjectRepository(Mespuntoventasuma)
        private  mespuntoventasumaRepository: Repository<Mespuntoventasuma>,
        
      ) {}
    
  
     async create(createmespuntoventassumadto: CreateMespuntoventasumaDto[]) {
               // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
       return await this.mespuntoventasumaRepository.save(createmespuntoventassumadto);
      }

      
   
  /*async findAll(idcentralizadormes:string, idempresa:number){

    await this.puntoventaService.findOnepuntoventa(idempresa);
  
  return await this.mespuntoventasumaRepository.find({
    where:{
      idcentralizadormes:idcentralizadormes,
    },
    
  });
  }*/
  async findAll(idcentralizadormes: string) {
    try {
      const resultados = await this.getsumaspuntoventa(idcentralizadormes);
      return resultados;
    } catch (error) {
      throw new Error(`Error en el servicio: ${error.message}`);
    }
  }

  private async getsumaspuntoventa(idcentralizadormes: string) {
    const mespuntosuma = await this.mespuntoventasumaRepository
    .createQueryBuilder('mespuntoventasuma')
    .leftJoinAndSelect('mespuntoventasuma.puntoventaactividad', 'puntoventaactividad')
    .where("mespuntoventasuma.idcentralizadormes = :idcentralizadormes", { idcentralizadormes })
    .getMany();  
    return mespuntosuma;
  }
  


  async update(idmespuntoventassuma:string, updatemespuntoventasumaDto: UpdateMespuntoventasumaDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.mespuntoventasumaRepository.update(idmespuntoventassuma, updatemespuntoventasumaDto)

  }
  
 

  async remove(idmespuntoventassuma:string){
    return await this.mespuntoventasumaRepository.softDelete(idmespuntoventassuma);
  }

}
