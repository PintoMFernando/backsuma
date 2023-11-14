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
    .innerJoin('puntoventaactividad.puntoventa', 'puntoventa')
    .innerJoin('puntoventaactividad.actividadess', 'actividadess')
    .where("puntoventa.idempresa = :idempresa", {idempresa})
   // .groupBy("puntoventa.idpuntoventa") 
   
    .select([
        'puntoventa.idpuntoventa as idpuntoventa',
        'puntoventa.num_sucursall as num_sucursall',
        'puntoventa.nombre as nombrepuntoventa',

        'puntoventaactividad.idpuntoventaactividad as puntoventaactividad_idpuntoventaactividad',
        'actividadess.idactividades as idactividades',
        'actividadess.nombre as nombreactividades',
        
    
        ])
        
    .getRawMany();
    
    const resultadosAgrupados: any[] = [];
    mespuntosuma.forEach((resultado) => {
    const puntoventaId = resultado.idpuntoventa;
    const grupoExistente = resultadosAgrupados.find(item => item.idpuntoventa === puntoventaId);
    if (!grupoExistente) {
      resultadosAgrupados.push({
        idpuntoventa: puntoventaId,
        num_sucursall: resultado.num_sucursall,
        nombrepuntoventa: resultado.nombrepuntoventa,
        data: [
          { idpuntoventaactividad: resultado.puntoventaactividad_idpuntoventaactividad,

            idactividades: resultado.idactividades,
            nombreactividades:  resultado.nombreactividades,

        }
         
        ]
      });
    } else {
     
      grupoExistente.data.push({ idpuntoventaactividad: resultado.puntoventaactividad_idpuntoventaactividad, idactividades: resultado.idactividades, nombreactividades:  resultado.nombreactividades} );
    }
  });
  return resultadosAgrupados;
 
  }

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
