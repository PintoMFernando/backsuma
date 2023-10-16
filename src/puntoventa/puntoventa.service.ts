import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Puntoventa } from './entities/puntoventa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PuntoventaService {

    
  constructor(
    @InjectRepository(Puntoventa)
    private readonly puntoventaRepository: Repository<Puntoventa>
  ) {}

  async findAll(){
    return await this.puntoventaRepository.find();
  }

  
  async findOne(idpuntoventa:number){
    //return idempresa;
  return await this.puntoventaRepository.findOneBy({idpuntoventa});

  }

  async findOnepuntoventa(idempresa:number){
    return await this.puntoventaRepository.find({
        where: {
            idempresa: idempresa, 
 
          },
      
      });
    }



 


    
}
