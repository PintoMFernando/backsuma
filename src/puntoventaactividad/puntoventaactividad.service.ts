import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Puntoventaactividad } from './entities/puntoventaactividad.entity';
import { UpdatePuntoventaactividadDto } from './dto/updatePuntoventaactividad.dto';
import { CreatePuntoventaactividadDto } from './dto/createPuntoventaactividad.dto';

@Injectable()
export class PuntoventaactividadService {


   
    constructor(
        @InjectRepository(Puntoventaactividad)
        private  puntoventaactividadRepository: Repository<Puntoventaactividad>,
        
      ) {}
    
  
     async create(createmespuntoventassumadto: CreatePuntoventaactividadDto[]) {
               // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
       return await this.puntoventaactividadRepository.save(createmespuntoventassumadto);
      }

      
   
  
  async findAll(idempresa: number) {
    try {
      const resultados = await this.getsumaspuntoventa(idempresa);
      return resultados;
    } catch (error) {
      throw new Error(`Error en el servicio: ${error.message}`);
    }
  }

  private async getsumaspuntoventa(idempresa: number) {
    const mespuntosuma = await this.puntoventaactividadRepository
    .createQueryBuilder('puntoventaactividad')
    .leftJoinAndSelect('puntoventaactividad.puntoventa', 'puntoventa')
    .leftJoinAndSelect('puntoventaactividad.actividadess','actividadess')
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

return mespuntosuma;

  
  }
//.innerJoin('puntoventaactividad.puntoventa','puntoventa')
    //.innerJoin('puntoventaactividad.actividadess','actividadess')
  async findAllbusqueda(idactividades:number,idpuntoventa:number){
  
    return await this.puntoventaactividadRepository.find({
      where:{
        idactividades:idactividades,
        idpuntoventa:idpuntoventa
      },
      
    });
    }

  
  


  



  async update(idpuntoventaactividad:string, updatemespuntoventasumaDto: UpdatePuntoventaactividadDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.puntoventaactividadRepository.update(idpuntoventaactividad, updatemespuntoventasumaDto)

  }
  
 

  async remove(idmespuntoventaactividad:string){
    return await this.puntoventaactividadRepository.delete(idmespuntoventaactividad);
  }


}
