import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Puntoventa } from './entities/puntoventa.entity';
import { Repository, WhereExpression } from 'typeorm';

@Injectable()
export class PuntoventaService {

    
  constructor(
    @InjectRepository(Puntoventa)
    public readonly puntoventaRepository: Repository<Puntoventa>
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


 

    async findTodoVenta(idempresa:number,idcentralizadormes:string){ //desde aqui tengo que jalar todas mis cosas como un comboox y despues, hacer un left join para que me traiga todas mis cosas
      
    
    /*  return await this.puntoventaRepository.find({
        relations:{
          puntoventaactividads:{
            ventatalonarios:{
              sumatalonarios:true,
             },
          }}  ,
        where:{
          puntoventaactividads:{
            ventatalonarios:{
              idcentralizadormes:idcentralizadormes
             },
          }},
        });
      }
*/     
const result = await this.puntoventaRepository.createQueryBuilder('puntoventa')
.leftJoinAndSelect('puntoventa.puntoventaactividads', 'pva') // LEFT JOIN puntoventaactividads
.leftJoinAndSelect('pva.ventatalonarios', 'ventatalonarios') // LEFT JOIN ventatalonarios
.leftJoinAndSelect('ventatalonarios.sumatalonarios', 'sumatalonarios') // LEFT JOIN sumatalonarios
//.leftJoinAndSelect('ventatalonarios.sumatalonarioelectronicos', 'sumatalonarioelectronicos')
.leftJoinAndSelect('pva.actividadess', 'actividades')
//.leftJoinAndSelect('pva.ventatalonarios.sumatalonarioelectronicos', 'archivostalonarioelectronico')
.where('puntoventa.idempresa = :idempresa', { idempresa })
//.andWhere('ventatalonarios.tipo = :tipo', { tipo: 1 } ) // Filtrar por el tipo deseado (1 en este ejemplo)
 
.andWhere('(ventatalonarios.idcentralizadormes = :idcentralizadormes OR ventatalonarios.idcentralizadormes IS NULL)', { idcentralizadormes })
.getMany();

//return result

const separarVentatalonariosPorTipo = (ventatalonarios) => {
  const tipo1 = [];
  const tipo2 = [];
  const tipo3 = [];

  ventatalonarios.forEach((ventatalonario) => {
      if (ventatalonario.tipo === 1) {
          tipo1.push(ventatalonario);
      } else if (ventatalonario.tipo === 2) {
          tipo2.push(ventatalonario);
      }else{
        tipo3.push(ventatalonario);
      }
  });

  return { ventatalonariostipo1: tipo1, ventatalonariostipo2: tipo2 , ventatalonariostipo3: tipo3 };
};

// Iterar sobre los datos originales para separar mis tipos de talonarios
const nuevosDatos = result.map(({ puntoventaactividads, ...resto }) => {
  const nuevasPuntoventaactividads = puntoventaactividads.map(({ ventatalonarios, ...pvaResto }) => {
      const { ventatalonariostipo1, ventatalonariostipo2, ventatalonariostipo3 } = separarVentatalonariosPorTipo(ventatalonarios);

      return {
          ...pvaResto,
          ventatalonariostipo1,
          ventatalonariostipo2,
          ventatalonariostipo3,
      };
  });

  return {
      puntoventaactividads: nuevasPuntoventaactividads,
      ...resto,
  };
});

return nuevosDatos



    }  
}
