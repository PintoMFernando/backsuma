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

  async findAll(idempresa: number) {
    try {
      const resultados = await this.getpuntoventaactividad(idempresa);
      return resultados;
    } catch (error) {
      throw new Error(`Error en el servicio: ${error.message}`);
    }
  }

  private async getpuntoventaactividad(idempresa: number) {
    const mespuntosuma = await this.puntoventaRepository
    .createQueryBuilder('puntoventa')
    .leftJoinAndSelect('puntoventa.puntoventaactividads', 'puntoventaactividads')
    .leftJoinAndSelect('puntoventaactividads.actividadess','actividadess')
    .where("puntoventa.idempresa = :idempresa", {idempresa})
    .groupBy("puntoventa.idpuntoventa")
   // .groupBy("puntoventa.idpuntoventa")
    .select([
        'puntoventa.idpuntoventa',
        'puntoventa.direccion_suc',
        'puntoventa.num_sucursall',
        'puntoventa.nombre',
        'puntoventa.idempresa',
       // 'puntoventaactividad.idpuntoventaactividad',
        'json_agg(actividadess) AS actividades_idactividades',
       // '(SELECT array_agg(idpuntoventaactividad) FROM puntoventaactividad WHERE puntoventa.idpuntoventa = puntoventaactividad.idpuntoventa) AS idpuntoventaactividad'
    ])
    .getRawMany();
    mespuntosuma.forEach(item => {
      item.actividades_idactividades = item.actividades_idactividades || [];
   });


return mespuntosuma;

  
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
