import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ventatalonario } from './entities/ventatalonario.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';

@Injectable()
export class VenatatalonarioService {
    createDocument(name: any, filePath: string) {
        throw new Error('Method not implemented.');
    }
    remove(idobservaciones: string) {
        throw new Error('Method not implemented.');
    }
    
    constructor(
        @InjectRepository(Ventatalonario)
        private readonly ventatalonarioRepository: Repository<Ventatalonario>
      ) {}
    
  
      async create(createVentaTalonarioDto: CreateVentaTalonarioDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.ventatalonarioRepository.save(createVentaTalonarioDto);
      }


     
      
    
      
    
     
  async findAll(idcentralizadormes: string) {
    try {
      const resultados = await this.getventatalonario(idcentralizadormes);
      return resultados;
    } catch (error) {
      throw new Error(`Error en el servicio: ${error.message}`);
    }
  }

  private async getventatalonario(idcentralizadormes: string) { ///falta traerventas
    const mesventas = await this.ventatalonarioRepository
    .createQueryBuilder('ventalonario')
    .innerJoin('centralizadormess.puntoventa', 'puntoventa')
    
    .where("puntoventa.idempresa = :idempresa", {idcentralizadormes})
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
    
    
  return mesventas;
 
  }

    
       
  async findAllByIdventatalonario(idmespuntoventasuma:string){
  
  return await this.ventatalonarioRepository.find({
    where:{
    //  idmespuntoventasuma:idmespuntoventasuma,
      
    },
    relations:['mespuntoventasuma']
  });
  }


 

  
  async update(idventatalonario:string,ventatalonarioDto:UpdateVentaTalonarioDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.ventatalonarioRepository.update(idventatalonario, ventatalonarioDto)

  }


 /* async remove(id:string){
    return await this.ventatalonarioRepository.softDelete({id});
  }
   */ 
}
