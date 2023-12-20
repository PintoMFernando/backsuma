import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ventatalonario } from './entities/ventatalonario.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';
import { Sumatalonario } from 'src/sumatalonario/entities/sumatalonario.entity';
import { SumatalonarioService } from 'src/sumatalonario/sumatalonario.service';
import { v4 as uuidv4 } from 'uuid';
import { Puntoventa } from 'src/puntoventa/entities/puntoventa.entity';
import { PuntoventaService } from 'src/puntoventa/puntoventa.service';
import { Puntoventaactividad } from 'src/puntoventaactividad/entities/puntoventaactividad.entity';
import { PuntoventaactividadService } from 'src/puntoventaactividad/puntoventaactividad.service';

@Injectable()
export class VenatatalonarioService {
    createDocument(name: any, filePath: string) {
        throw new Error('Method not implemented.');
    }
    
    
    constructor(
        @InjectRepository(Ventatalonario)
        private readonly ventatalonarioRepository: Repository<Ventatalonario>,
        //@InjectRepository(Puntoventaactividad)
        private readonly puntoventaactividadRepository: PuntoventaactividadService,
        //@InjectRepository(Puntoventa)
       // private readonly puntoventaRepository:PuntoventaService,
        //@InjectRepository(SumatalonarioService)
        private readonly sumatalonarioService: SumatalonarioService,
      
      ) {}
    
  
      async create(createVentaTalonarioDto: CreateVentaTalonarioDto[]) {
       
     
      
        return await this.ventatalonarioRepository.save(createVentaTalonarioDto);
      }


     
      
    
      
    
     
  async findAll(idcentralizadormes: string,numtalonario:number) {
    try {
      const resultados = await this.getventatalonario(idcentralizadormes,numtalonario);
      return resultados;
    } catch (error) {
      throw new Error(`Error en el servicio: ${error.message}`);
    }
  }

  private async getventatalonario(idcentralizadormes: string,tipo: number) { ///falta traerventas
  
    /*return await this.puntoventaactividadRepository.find(
      {
        relations:[
          'puntoventaactividads',
          'puntoventaactividads.ventatalonarios',
          'puntoventaactividads.ventatalonarios.sumatalonarios',
        ],
        where:{
          puntoventaactividads:{
            ventatalonarios:{
              idcentralizadormes: idcentralizadormes,
              tipo:tipo,  
              }
            },
          
        }
      }
    )*/


    return await this.puntoventaactividadRepository.puntoventaactividadRepository.find(
      {
        relations:{
          //'puntoventaactividad.puntoventa',
         // puntoventaactividad:true,
           //sumatalonarios:true ,
          //puntoventa:true,
           ventatalonarios:{
            sumatalonarios:true,
           },
           
          }  ,
        where:{
          ventatalonarios:{
         idcentralizadormes: idcentralizadormes,
          
          tipo:tipo
          }
        }
      }
    )

    const mesventas = await this.ventatalonarioRepository
    .createQueryBuilder('ventatalonario')
    .innerJoinAndSelect('ventatalonario.sumatalonarios', 'sumatalonarios')
    .select(['ventatalonario.*'])
    .addSelect([
      'JSON_AGG(JSON_BUILD_OBJECT(\'idventatalonario\', sumatalonarios.idsumatalonario, \'numfactura\', sumatalonarios.numfactura, \'monto\', sumatalonarios.monto, \'estado\', sumatalonarios.estado, \'idventatalonario\', sumatalonarios.idventatalonario,\'idsumatalonario\', sumatalonarios.idsumatalonario)) as sumaventatalonario'
     ])
    .where('ventatalonario.idcentralizadormes = :idcentralizadormes', { idcentralizadormes })
    .andWhere('ventatalonario.tipo = :tipo', {tipo})
    .groupBy('ventatalonario.idventatalonario, ventatalonario.idpuntoventaactividad, ventatalonario.idcentralizadormes')
    .orderBy({
      'ventatalonario.numtalonario': 'ASC',
      
    })
    .getRawMany();
  
    const organizedMesventas = mesventas.reduce((acc, item) => {   //organiza por idcentralizadormes e idpuntoventaactividadsss
    const key = `${item.idcentralizadormes}_${item.idpuntoventaactividad}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
   }, {});

const resultadoFinal = Object.values(organizedMesventas);//convierte el objeto a array
const resultadoOrdenado = resultadoFinal.map((group: any[]) => {
  group.forEach((item: any) => {
    if (item.sumaventatalonario && Array.isArray(item.sumaventatalonario)) {
      item.sumaventatalonario.sort((a, b) => a.numfactura - b.numfactura);
    }
  });
  return group;
});

return resultadoOrdenado
 
  }

    
       
  async findAllByIdventatalonario(idmespuntoventasuma:string){
  
  return await this.ventatalonarioRepository.find({
    where:{
    //  idmespuntoventasuma:idmespuntoventasuma,
      
    },
    relations:['mespuntoventasuma']
  });
  }


  async findAllfindAllbusqueda(idventatalonario:string){
  
    return await this.ventatalonarioRepository.find({
      where:{
        idventatalonario:idventatalonario,
        
      },
      
    });
    }
  


 

  
  async update(idventatalonario:string,ventatalonarioDto:UpdateVentaTalonarioDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    
   
    return await this.ventatalonarioRepository.update(idventatalonario, ventatalonarioDto)

  }


 
   
  async remove(idpuntoventaactividad:string){
    return await this.ventatalonarioRepository.delete(idpuntoventaactividad);
  }



  async findAllsearchgetupdatedelete(createcomprassumasdetalleDto: any){
   console.log("HOLOOOOOOS",createcomprassumasdetalleDto)   //si me llega un array de jason
    //return createcomprassumasdetalleDto
    let idCentralizadormesEncontrado: string | null = null;
    //let idPuntoVentaActividadEncontrado: string | null = null;
    
    
    if(idCentralizadormesEncontrado ){
      idCentralizadormesEncontrado = createcomprassumasdetalleDto[0]?.idcentralizadormes;
      await this.buscartalonario(idCentralizadormesEncontrado,createcomprassumasdetalleDto)
    }
    else{
      idCentralizadormesEncontrado = "67e62927-c98d-408e-8e4c-469918f56c9d";
      await this.buscartalonario(idCentralizadormesEncontrado,createcomprassumasdetalleDto)
      //await this.creartalonariosventas(createcomprassumasdetalleDto)
    }
    
  
   
  
  }
  async buscartalonario(idcentralizadormes:string ,misdatos:any){

    const busquedaventatalonario = await this.ventatalonarioRepository
    .createQueryBuilder('ventatalonario')
    .innerJoin('sumatalonario', 'st', 'st.idventatalonario = ventatalonario.idventatalonario')
    .where('ventatalonario.idcentralizadormes = :idcentralizadormes', { idcentralizadormes })
    .select('st.idventatalonario')
    //.addSelect('')
    .groupBy('st.idventatalonario')
    .getRawMany();
   
    // return busquedaventatalonario
   
    if(busquedaventatalonario.length !==0){ //hay datos
      console.log("emntraaaaaaa",busquedaventatalonario,idcentralizadormes)
      busquedaventatalonario.forEach(async objeto => {
        const stIdventatalonario = objeto.st_idventatalonario;
        await this.remove(stIdventatalonario)
        await this.creartalonariosventas(misdatos)
     
      });
       

    }else{
    
      await this.creartalonariosventas(misdatos)
     

    }
  console.log(busquedaventatalonario)
  return busquedaventatalonario
  }

  async creartalonariosventas(misdatos:any ){
    let jsonventatalonario
    let arraysumas = []
    
    for (const item of misdatos) {
       jsonventatalonario ={
        idventatalonario:item.idventatalonario,
        numtalonario:item.numtalonario,
        factinicial:item.factinicial,
        factfinal:item.factfinal,
        tipo:item.tipo,
        montototal:item.suma,
        idpuntoventaactividad:item.idpuntoventaactividad,
        idcentralizadormes:item.idcentralizadormes,
      }
      await this.create(jsonventatalonario)
      for (const suma of item.sumatalonarios) {
       
          if(suma.idventatalonario){
               
            switch (suma.monto) {
              case 'A':
              case 'a':
                
                suma.estado = 1;
                suma.monto=0;
                break;
              case 'E':
              case 'e':
                
                suma.estado = 2;
                suma.monto=0;
                break;
              case 'I':
              case 'i':
                
                suma.estado = 3;
                suma.monto=0;
                break;
              default:
                suma.estado=0;
                break;
            }
            const jsonsuma ={
              idsumatalonario:suma.idsumatalonario,
              numfactura:suma.numfactura,
              monto:suma.monto,
              idventatalonario:suma.idventatalonario,
              estado:suma.estado,
            }
           arraysumas.push(jsonsuma)
          }

        }
        await this.insertarsumas(arraysumas)
     
         console.log("gato pato2",item)
         console.log("gato pato3",arraysumas)
    }


 
 
 
      
      
  
    
   /* const nuevoArray = misdatos.map(subArray => {
      // Filtrar el subArray basado en el ID específico
      const objetoFiltrado = misdatos.find(objeto => objeto.idventatalonario === idventatalonario);
    
      // Crear un nuevo objeto solo con los campos deseados
      if (objetoFiltrado) {
        return {
          idventatalonario: objetoFiltrado.idventatalonario,
          numtalonario: objetoFiltrado.numtalonario,
          factinicial: objetoFiltrado.factinicial,
          factfinal:objetoFiltrado.factfinal,
          tipo:objetoFiltrado.tipo,
          montototal:objetoFiltrado.montototal,
          idpuntoventaactividad:objetoFiltrado.idpuntoventaactividad,
          idcentralizadormes:objetoFiltrado.idcentralizadormes,
          // Agrega otros campos que desees incluir
        };
      }
    
      return null; // O puedes manejar el caso cuando no se encuentra el ID
    });
    */
    // Filtra el array para eliminar los elementos nulos (cuando no se encuentra el ID)
   // const resultadoFinal = nuevoArray.filter(objeto => objeto !== null);
   // await this.create(resultadoFinal)
    //console.log(resultadoFinal);
  }



  async insertarsumas(arraysumas:any){

    
    await this.sumatalonarioService.create(arraysumas)
   

  }
  

}
