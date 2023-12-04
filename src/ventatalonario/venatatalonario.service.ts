import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ventatalonario } from './entities/ventatalonario.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateVentaTalonarioDto } from './dto/createVentaTalonario.dto';
import { UpdateVentaTalonarioDto } from './dto/updateVentaTalonario.dto';
import { Sumatalonario } from 'src/sumatalonario/entities/sumatalonario.entity';
import { SumatalonarioService } from 'src/sumatalonario/sumatalonario.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class VenatatalonarioService {
    createDocument(name: any, filePath: string) {
        throw new Error('Method not implemented.');
    }
    
    
    constructor(
        @InjectRepository(Ventatalonario)
        private readonly ventatalonarioRepository: Repository<Ventatalonario>,
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

  private async getventatalonario(idcentralizadormes: string,numtalonario: number) { ///falta traerventas
  
    const mesventas = await this.ventatalonarioRepository
    .createQueryBuilder('ventatalonario')
    .innerJoinAndSelect('ventatalonario.sumatalonarios', 'sumatalonarios')
    .select(['ventatalonario.*'])
    .addSelect([
      'JSON_AGG(JSON_BUILD_OBJECT(\'idventatalonario\', sumatalonarios.idsumatalonario, \'numfactura\', sumatalonarios.numfactura, \'monto\', sumatalonarios.monto, \'estado\', sumatalonarios.estado, \'idventatalonario\', sumatalonarios.idventatalonario,\'idsumatalonario\', sumatalonarios.idsumatalonario)) as sumaventatalonario'
     ])
    .where('ventatalonario.idcentralizadormes = :idcentralizadormes', { idcentralizadormes })
    .andWhere('ventatalonario.numtalonario = :numtalonario', {numtalonario})
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



  async findAllsearchgetupdatedelete(createcomprassumasdetalleDto: CreateVentaTalonarioDto[]){
   
    for(let i=0 ; i<createcomprassumasdetalleDto.length; i++){
        const idventatalonario=createcomprassumasdetalleDto[i][0].idventatalonario
        await this.buscartalonario(String(idventatalonario),createcomprassumasdetalleDto)
        console.log( "holos es mi dato que me llega ",idventatalonario)

    }


  }
  async buscartalonario(idventatalonario:string, misdatos:any){

    const busquedaventatalonario = await this.ventatalonarioRepository
    .createQueryBuilder('ventatalonario')
    .innerJoin('sumatalonario', 'st', 'st.idventatalonario = ventatalonario.idventatalonario')
    .where('ventatalonario.idventatalonario = :idventatalonario ', {
      idventatalonario: idventatalonario,
         })
    .select('st.idventatalonario')
    //.addSelect('')
    .getRawOne();
      console.log("son muchos de mis datos", busquedaventatalonario)
    // return busquedaventatalonario
    if(busquedaventatalonario){ //hay datos
       await this.remove(idventatalonario)
       await this.creartalonariosventas(misdatos,idventatalonario)
       await this.crearsumastalonarios(misdatos,idventatalonario)
       //await this.create()

    }else{
      await this.creartalonariosventas(misdatos,idventatalonario)
      await this.crearsumastalonarios(misdatos,idventatalonario)

    }
  console.log(busquedaventatalonario)
  return busquedaventatalonario
  }

  async creartalonariosventas(misdatos:any ,idventatalonario:string){
    const nuevoArray = misdatos.map(subArray => {
      // Filtrar el subArray basado en el ID específico
      const objetoFiltrado = subArray.find(objeto => objeto.idventatalonario === idventatalonario);
    
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
    
    // Filtra el array para eliminar los elementos nulos (cuando no se encuentra el ID)
    const resultadoFinal = nuevoArray.filter(objeto => objeto !== null);
    await this.create(resultadoFinal)
    console.log(resultadoFinal);
  }


  async crearsumastalonarios(misdatos:any ,idventatalonario:string){

    const arraySumaventatalonario = misdatos
    .flat() // Aplanar la matriz
    .find(objeto => objeto.idventatalonario === idventatalonario)?.sumaventatalonario;
    
    this.insertarsumas(arraySumaventatalonario);
   

    
   // 
    console.log(arraySumaventatalonario);

    


  }

  async insertarsumas(arraysumas:any){
    console.log("es mi array??",arraysumas);
    await this.sumatalonarioService.create(arraysumas)
   

  }
  

}
