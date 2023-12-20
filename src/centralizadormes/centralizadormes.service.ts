import { Injectable } from '@nestjs/common';
import { Centralizadormes } from './entities/centralizadormes.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCentralizadorMesDto } from './dto/createMespuntoventasuma.dto';
import { UpdateCentralizadorMesDto } from './dto/updateMespuntoventasuma.dto';
import { UpdateDatoEmpresaDto } from 'src/centralizador/dto/updateDatoEmpresa.dto';
import { getConnection } from 'typeorm';
import { Centralizador } from 'src/centralizador/entities/centralizador.entity';

@Injectable()
export class CentralizadormesService {

    constructor(
        @InjectRepository(Centralizadormes)
        private readonly centralizadormesRepository: Repository<Centralizadormes>
      ) {}
    
    

      async create(createcentralizadorDto: CreateCentralizadorMesDto){
   
    

        return await this.centralizadormesRepository.save(createcentralizadorDto);
      }
      
    
      async findAll(){
        return await this.centralizadormesRepository.find();
      }
    
       
  /*async findAllByIdCentralizador(id_dato:number, anio){ 
  
  return await this.centralizadormesRepository.find({
    where:{
      'centralizador':{id_empresa:id_dato,anio:anio },
    },
    order: {
      mes: 'ASC' // esto me trae ordenado por meses porque al omento de llamar me traia desordenado
    },
    
    relations:['centralizador']
  });


  }*/
  async findAllByIdCentralizador(idempresa:number, anio){ //con esto traigo mis 
      console.log("entra perp que es??",idempresa)
    const resultadoSumatotaltodo = await this.centralizadormesRepository
    .createQueryBuilder('centralizadormes')
    .leftJoin('centralizador', 'c', 'c.idcentralizador = centralizadormes.idcentralizador')
    .leftJoin('ventatalonario', 'vt', 'vt.idcentralizadormes = centralizadormes.idcentralizadormes')
    .leftJoin('otrossumas', 'os', 'os.idcentralizadormes = centralizadormes.idcentralizadormes')
    .leftJoin('puntoventaactividad', 'pva', 'pva.idpuntoventaactividad = vt.idpuntoventaactividad')
    .leftJoin('puntoventa', 'pv', 'pv.idpuntoventa = pva.idpuntoventa')
    .leftJoin('actividades', 'a', 'a.idactividades = pva.idactividades')
    .where('c.id_empresa = :idempresa AND c.anio = :anio ', {
      idempresa: idempresa,
      anio:anio

    })
    .groupBy('centralizadormes.idcentralizadormes , c.idcentralizador')  // Agrupar por las columnas principales
    .orderBy('centralizadorMes.mes', 'ASC')
    .select([
      'centralizadormes.*',
      'c.*',
      
      '(SELECT json_agg(json_build_object(\'otrossumas\', json_build_object(\'monto\', os.montootros, \'nombre\', os.nombrecobro))) FROM otrossumas os WHERE os.idcentralizadormes = centralizadormes.idcentralizadormes) AS otrosumas',
      '(SELECT json_agg(json_build_object(\'puntoventa\', json_build_object(\'idpuntoventaactividad\', pva.idpuntoventaactividad, \'nombre\', pv.nombre, \'actividad\', a.nombre, \'montototal\', vt.montototal))) FROM ventatalonario vt LEFT JOIN puntoventaactividad pva ON vt.idpuntoventaactividad = pva.idpuntoventaactividad LEFT JOIN puntoventa pv ON pva.idpuntoventa = pv.idpuntoventa LEFT JOIN actividades a ON pva.idactividades = a.idactividades WHERE vt.idcentralizadormes = centralizadormes.idcentralizadormes) AS puntoventa'
      //'json_agg(json_build_object(\'puntoventa\', json_build_object(\'idpuntoventaactividad\', pva.idpuntoventaactividad, \'nombre\', pv.nombre, \'actividad\', a.nombre, \'montototal\', vt.montototal))) AS puntoventa'

    // 'json_agg(json_build_object(\'puntoventa\', json_build_object(\'idpuntoventaactividad\', pva.idpuntoventaactividad, \'nombre\', pv.nombre, \'actividad\', a.nombre, \'montototal\', SUM(vt.montototal)))) AS puntoventa'
 
   ])
    .getRawMany();

    //return resultadoSumatotaltodo

    const resultadoFinal = resultadoSumatotaltodo.map(item => {
      // Verificar si el objeto tiene la propiedad 'puntoventa'
      if (item.puntoventa && Array.isArray(item.puntoventa)) {
        // Crear un objeto para almacenar la suma de 'montototal' por 'idpuntoventaactividad'
        const montototalPorActividad = {};
    
        // Recorrer la propiedad 'puntoventa'
        item.puntoventa.forEach(punto => {
          const { idpuntoventaactividad, montototal } = punto.puntoventa;
    
          // Verificar si el objeto ya tiene esa 'idpuntoventaactividad'
          if (!montototalPorActividad[idpuntoventaactividad]) {
            montototalPorActividad[idpuntoventaactividad] = {
              idpuntoventaactividad,
              nombre: punto.puntoventa.nombre, // Asumiendo que 'nombre' es una propiedad válida
              actividad: punto.puntoventa.actividad, // Asumiendo que 'actividad' es una propiedad válida
              montototal: 0,
            };
          }
    
          // Sumar 'montototal' por 'idpuntoventaactividad'
          montototalPorActividad[idpuntoventaactividad].montototal += montototal;
        });
    
        // Extraer los valores del objeto a un array
        const puntoventaSumado = Object.values(montototalPorActividad);
    
        // Retornar el objeto con la propiedad 'puntoventa' modificada
        return {
          ...item,
          puntoventa: puntoventaSumado,
        };
      }
    
      // Si no tiene la propiedad 'puntoventa', retornar el objeto sin cambios
      return item;
    });
    
    
  console.log(resultadoFinal);
  return resultadoFinal

  }

  
  

 
  

  async findAllByIdCentralizadormes(idcentralizadormes:string){
    return await this.centralizadormesRepository.findOneBy({idcentralizadormes});
  
    }

    findMany(idcentralizadormes: string) {
      console.log("entra al servicio");
      return this.centralizadormesRepository.find({
        where: {
          idcentralizadormes: idcentralizadormes
          
        },
        relations: ['comprassumas','comprassumas.comprassumasdetalle'],
      });
    }


     find(idcentralizadormes:string){
      console.log("entra al servicioooooooooooooooooooo");
      return  this.centralizadormesRepository.find({
        where:{
            idcentralizadormes: idcentralizadormes
          },
          relations: ['otrossumas'],
      });
      }
    
    

      
    


  

  async update(idcentralizadormes:string,updatecentralizadormesDto:UpdateCentralizadorMesDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
   
    return await this.centralizadormesRepository.update(idcentralizadormes, updatecentralizadormesDto)

   }

 

   
  async findAllCaclulosCentralizadormes(idcentralizadormes:string,mes:number, idempresa:number,anio:number){
   console.log("entraaaa")
    const resultadoSuma = await this.centralizadormesRepository
    .createQueryBuilder('centralizadormes')
    .innerJoin('ventatalonario', 'vt', 'vt.idcentralizadormes = centralizadormes.idcentralizadormes')
    .innerJoin('centralizadormes.centralizador','centralizador')
    .where('centralizadormes.mes = :mes AND centralizador.id_empresa = :idEmpresa AND centralizador.anio = :anio', {
      mes: mes,
      idEmpresa: idempresa,
      anio: anio,
    })
    .select('SUM(vt.montototal)', 'totalMontotal')
    .getRawOne();
   
    if (resultadoSuma && resultadoSuma.totalMontotal !== null) {
    const totalMontotalNumerico = parseFloat(resultadoSuma.totalMontotal);
    const result =  await this.centralizadormesRepository
    .createQueryBuilder()
    .update(Centralizadormes)
    .set({ totalventas: totalMontotalNumerico })
    .where('idcentralizadormes = :id', { id: idcentralizadormes })
    .execute();
    return result;

     
   
    }
    else {
     
      console.error('El resultadoSuma.totalMontotal no es un número válido.');
      return null; // O manejar según tus necesidades
    }
  

  }


  async findAllCaclulosCentralizadormescompras(idcentralizadormes:string){
    console.log("entraaaasii",idcentralizadormes)
     const resultadoComprasBruto = await this.centralizadormesRepository
     .createQueryBuilder('centralizadormes')
    .where('centralizadormes.idcentralizadormes = :id', { id: idcentralizadormes })
    .innerJoin('centralizadormes.comprassumas', 'comprassumas')
    .select('comprassumas.total100 + comprassumas.totalgasolina + comprassumas.totalice as total_bruto')
    .addSelect('comprassumas.totalgasolina*0.3 +comprassumas.totalice-comprassumas.totalicecredito as total_excento')
    
    .getRawOne();
    console.log(resultadoComprasBruto)
    
    
   if (resultadoComprasBruto && resultadoComprasBruto.total_bruto !== null) {
     const bruto = parseFloat(resultadoComprasBruto.total_bruto);
     const excento = parseFloat(resultadoComprasBruto.total_excento);
     const neto = bruto-excento;
     const result =  await this.centralizadormesRepository
     .createQueryBuilder()
     .update(Centralizadormes)
     .set({ bruto: bruto, excento:excento,totalcompras:neto})
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
     return result;
     }
     else {    
       console.error('El resultadoSuma.totalMontotal no es un número válido.');
       return null; // O manejar según tus necesidades
     }
   
 
   }



   async findAllCaclulosCentralizadormesiva(idcentralizadormes:string,mes:number,anio:number,id_empresa:number){
    console.log("entraaaasii",idcentralizadormes)
    if(mes==12){
      mes =1;
      anio= anio+1; //si es diciembre aumenta el anio mas
    }else{
      mes=mes+1;
    }
    
    
     const resultadoSumacomprasiva = await this.centralizadormesRepository
     .createQueryBuilder('centralizadormes')
     .where('centralizadormes.idcentralizadormes = :id', { id: idcentralizadormes })
    //.innerJoin('centralizadormes.comprassumas', 'comprassumas')
    
    .select('(centralizadormes.totalventas - centralizadormes.totalcompras)* 0.13 as iva')
    .addSelect(' centralizadormes.saldoiva as saldoiva')
    .addSelect(' centralizadormes.totalventas as totalventas')
    .addSelect(' centralizadormes.totalcompras as totalcompras')
    .getRawOne();
     //return resultadoSumacomprasiva
   if (resultadoSumacomprasiva && resultadoSumacomprasiva.iva !== null) {
     let iva = parseFloat(resultadoSumacomprasiva.iva); 
     let saldoiva = parseFloat(resultadoSumacomprasiva.saldoiva);
     if( saldoiva> iva){
      iva=0
     }else{
       iva=iva-saldoiva
       
     }


     if (iva >= 0.5) {
         iva=Math.ceil(iva);
     } else {
         iva=Math.floor(iva);
     }  
    

     const result =  await this.centralizadormesRepository
     .createQueryBuilder()
     .update(Centralizadormes)
     .set({ iva: iva })
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
    // return result;
     }
     else {
      
       console.error('El resultadoSuma.totalMontotal no es un número válido.');
      // return null; // O manejar según tus necesidades
     }

     let compras = parseFloat(resultadoSumacomprasiva.totalcompras); 
     let ventas = parseFloat(resultadoSumacomprasiva.totalventas); 
     let saldoiva = parseFloat(resultadoSumacomprasiva.saldoiva); 
     let saldoivamessiguiente = (ventas-compras)*0.13;
     if (saldoivamessiguiente >= 0.5) {
      saldoivamessiguiente=Math.ceil(saldoivamessiguiente);
  } else {
    saldoivamessiguiente=Math.floor(saldoivamessiguiente);
  }  
     saldoiva= (saldoivamessiguiente-saldoiva) *-1
     const resultadoidsigueintemes  = await this.centralizadormesRepository //esto me trae el id de centrlaizador
    .createQueryBuilder('centralizadormes')
    .innerJoin('centralizadormes.centralizador','centralizador')
    .where('centralizadormes.mes = :mes  AND centralizador.anio = :anio AND centralizador.id_empresa = :id_empresa', {
      mes: mes,
      anio: anio,
      id_empresa:id_empresa,
    })
    .select('centralizadormes.idcentralizadormes ')
    .addSelect(' centralizador.anio ')
    .addSelect(' centralizadormes.mes ')
    .getRawOne();
   
    //traeremos el id
    let idcentralizadormessigueinte = resultadoidsigueintemes.idcentralizadormes;
    
    const result2 =  await this.centralizadormesRepository
     .createQueryBuilder()
     .update(Centralizadormes)
     .set({ saldoiva: saldoiva })
     .where('idcentralizadormes = :id', { id: idcentralizadormessigueinte })
     .execute();
     return result2;
     

   
     
   
 
   }



   
   async findAllCaclulosCentralizadormesit(idcentralizadormes:string){
    console.log("entraaaasii",idcentralizadormes)
     const resultadocalculoit = await this.centralizadormesRepository
     .createQueryBuilder('centralizadormes')
     .where('centralizadormes.idcentralizadormes = :id', { id: idcentralizadormes })
    //.innerJoin('centralizadormes.comprassumas', 'comprassumas')
    .select('(centralizadormes.totalventas* 0.03)-centralizadormes.saldoiue as it')
    .addSelect(' centralizadormes.saldoiue ')
    .getRawOne();
     //return resultadocalculoit
    
   if (resultadocalculoit && resultadocalculoit.it !== null) {
     let it = parseFloat(resultadocalculoit.it); 
     let saldoiue = parseFloat(resultadocalculoit.saldoiue); 
     it=it-saldoiue
     
     if (it >= 0.5) {
      it=Math.ceil(it);
     } else {
      it=Math.floor(it);
     }  

     if(saldoiue> it){
      it=0
     }
    

     const result =  await this.centralizadormesRepository
     .createQueryBuilder()
     
     .update(Centralizadormes)
     .set({ it: it })
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
     return result;
     }
     else {
      
       console.error('El resultadoSuma.totalMontotal no es un número válido.');
       return null; // O manejar según tus necesidades
     }
   
 
   }






   async findAllCaclulosCentralizadormesivaimpuestossaldoiva(idcentralizadormes:string,ivaimpuestos:number){
    console.log("entraaaasii",idcentralizadormes)
     const resultadocalculoit = await this.centralizadormesRepository
     .createQueryBuilder('centralizadormes')
     .where('centralizadormes.idcentralizadormes = :id', { id: idcentralizadormes })
    //.innerJoin('centralizadormes.comprassumas', 'comprassumas')
    .select('centralizadormes.saldoiva ')
    .addSelect(' centralizadormes.ivaimpuestos ')
    .getRawOne();
     //return resultadocalculoit
    
   if (resultadocalculoit && resultadocalculoit.saldoiva !== null) {
     let saldoivaprimervalor = parseFloat(resultadocalculoit.saldoiva); 
     let ivaimpuestosprimervalor = parseFloat(resultadocalculoit.ivaimpuestos); 
    

     if (saldoivaprimervalor >= 0.5) {
      saldoivaprimervalor=Math.ceil(saldoivaprimervalor);
     } else {
      saldoivaprimervalor=Math.floor(saldoivaprimervalor);
     }  
     console.log("saldoprimervalor",saldoivaprimervalor)
     //let saldoivasumaivaimpuestos= saldoiva+ivaimpuestos
     saldoivaprimervalor= saldoivaprimervalor-ivaimpuestosprimervalor //primer paso restamos el valor saldoiva eivaimpuestos


     const result =  await this.centralizadormesRepository //2do paso hacemos un update a ivaimpuestos
     .createQueryBuilder()
     .update(Centralizadormes)
     .set({ ivaimpuestos: ivaimpuestos })
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
     //return result;
     console.log("patch mipuestos",ivaimpuestos)
     console.log("patch saldoivaprimervalor despuesdel cambio",saldoivaprimervalor)
     let saldoivanuevo= (saldoivaprimervalor+ivaimpuestos)*-1
     console.log("patch soldoiva lo que se envia",saldoivanuevo)
     const result2 =  await this.centralizadormesRepository
     .createQueryBuilder()
     
     .update(Centralizadormes)
     .set({ saldoiva: saldoivanuevo })
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
     return result2;

     }
     
   }
     


   
   async findAllCaclulosCentralizadormesitimpuestossaldoiue(idcentralizadormes:string,saldoiue:number,mes:number,anio:number,id_empresa:number){


    console.log("entraaaasiiami centrlaizador iuie",idcentralizadormes)
     const resultadocalculoit = await this.centralizadormesRepository
     .createQueryBuilder('centralizadormes')
     .where('centralizadormes.idcentralizadormes = :id', { id: idcentralizadormes })
    //.select('centralizadormes.saldoiue ')
    .addSelect(' centralizadormes.it ')
    .getRawOne();
     //return resultadocalculoit
    
   if (resultadocalculoit && resultadocalculoit.saldoiue !== null) {
     //let saldoiue = parseFloat(resultadocalculoit.saldoiue); 
     let it = parseFloat(resultadocalculoit.it);
     
      console.log("mi it",it)
      

     if (saldoiue >= 0.5) {
      saldoiue=Math.ceil(saldoiue);
     } else {
      saldoiue=Math.floor(saldoiue);
     }  

     
     console.log("mi saldoiue",saldoiue)
      if(saldoiue>it){
        saldoiue = it-saldoiue
        saldoiue=saldoiue*-1
      }
      else{
        saldoiue=0;
      }

      console.log("mi saldoiue",saldoiue)//hastaqui esta bien , pero falta introducir para el siguiente mes, necesito su idmes


      if(mes==12){
        mes =1;
        anio= anio+1; //si es diciembre aumenta el anio mas
      }else{
        mes=mes+1;
      }
      console.log("mi mes",mes)
      console.log("mi ",anio)


      const resultadoidsigueintemess  = await this.centralizadormesRepository //esto me trae el id de centrlaizador
      .createQueryBuilder('centralizadormes')
      .innerJoin('centralizadormes.centralizador','centralizador')
      .where('centralizadormes.mes = :mes  AND centralizador.anio = :anio AND centralizador.id_empresa = :idempresa', {
        mes: mes,
        anio: anio,
        idempresa: id_empresa,
      })
      .select('centralizadormes.idcentralizadormes ')
      .addSelect(' centralizador.anio ')
      .addSelect(' centralizadormes.mes ')
      .getRawOne();

      
      let idcentralizadormes = resultadoidsigueintemess.idcentralizadormes;


     console.log("mi idcentrlaizdormes",idcentralizadormes)
     

     const result2 =  await this.centralizadormesRepository //esto al ultima cuando tenga el idcentralizador
     .createQueryBuilder()
     
     .update(Centralizadormes)
     .set({ saldoiue: saldoiue })
     .where('idcentralizadormes = :id', { id: idcentralizadormes })
     .execute();
     return result2;

     }

    }
    
 
   









    async findAllCaclulosCentralizadormesotros(idcentralizadormes:string){
      console.log("entraaaa")
       const resultadoSumaotros = await this.centralizadormesRepository
       .createQueryBuilder('centralizadormes')
       .innerJoin('otrossumas', 'os', 'os.idcentralizadormes = centralizadormes.idcentralizadormes')
       //.innerJoin('centralizadormes.centralizador','centralizador')
       .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
        idcentralizadormes: idcentralizadormes,
       })
       .select('SUM(os.montootros) as montootros')
       .getRawOne();
       
       
       if (resultadoSumaotros && resultadoSumaotros.montootros !== null) {
       const totalMontoOtros = parseFloat(resultadoSumaotros.montootros);
       //return totalMontoOtros
       const result =  await this.centralizadormesRepository
       .createQueryBuilder()
       .update(Centralizadormes)
       .set({ otros: totalMontoOtros })
       .where('idcentralizadormes = :id', { id: idcentralizadormes })
       .execute();
       return result;
       }
       else {
         console.error('El resultadoSuma.totalMontotal no es un número válido.');
         return null; // O manejar según tus necesidades
       }
     
   
     }


     async findAllCaclulosCentralizadormestotal(idcentralizadormes:string){
      console.log("entraaaa")
       const resultadoSumatotal = await this.centralizadormesRepository
       .createQueryBuilder('centralizadormes')
       .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
        idcentralizadormes: idcentralizadormes,
       })
       
       .select('centralizadormes.iva+centralizadormes.it+centralizadormes.comision as total')
       .getRawOne();
       
       
       if (resultadoSumatotal && resultadoSumatotal.total !== null) {
       const totalMontoTotal = parseFloat(resultadoSumatotal.total);
       //return totalMontoOtros
       const result =  await this.centralizadormesRepository
       .createQueryBuilder()
       .update(Centralizadormes)
       .set({ total: totalMontoTotal })
       .where('idcentralizadormes = :id', { id: idcentralizadormes })
       .execute();
       return result;
       }
       else {
         console.error('El resultadoSuma.totalMontotal no es un número válido.');
         return null; // O manejar según tus necesidades
       }
     
   
     }

     async findAllCaclulosCentralizadormestodototal(idcentralizadormes:string){
      console.log("entraaaa")
       const resultadoSumatotaltodo = await this.centralizadormesRepository
       .createQueryBuilder('centralizadormes')
       .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
        idcentralizadormes: idcentralizadormes,
       })
       .select('centralizadormes.otros+centralizadormes.total as totaltodo')
       .getRawOne();
       
       
       if (resultadoSumatotaltodo && resultadoSumatotaltodo.total !== null) {
       const totalMontoTotaltodo = parseFloat(resultadoSumatotaltodo.totaltodo);
       //return totalMontoOtros
       const result =  await this.centralizadormesRepository
       .createQueryBuilder()
       .update(Centralizadormes)
       .set({ totaltodo: totalMontoTotaltodo })
       .where('idcentralizadormes = :id', { id: idcentralizadormes })
       .execute();
       return result;
       }
       else {
         console.error('El resultadoSuma.totalMontotal no es un número válido.');
         return null; // O manejar según tus necesidades
       }
     
   
     }






     async findAlldatoscentralizadorsucursales(idcentralizadormes:string){ //con esto traigo mis 
      
       const resultadoSumatotaltodo = await this.centralizadormesRepository
       .createQueryBuilder('centralizadormes')
       .innerJoin('ventatalonario', 'vt', 'vt.idcentralizadormes = centralizadormes.idcentralizadormes')
       .innerJoin('puntoventaactividad', 'pva', 'pva.idpuntoventaactividad = vt.idpuntoventaactividad')
       .innerJoin('puntoventa', 'pv', 'pv.idpuntoventa = pva.idpuntoventa')
       .innerJoin('actividades', 'a', 'a.idactividades = pva.idactividades')
       .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
        idcentralizadormes: idcentralizadormes,
       })
       .select('vt.montototal')
       .addSelect('pva.idpuntoventaactividad')
       .addSelect('pv.nombre')
       .addSelect('a.nombre')
       .getRawMany();
       
       
       return resultadoSumatotaltodo
     
   
     }



     async findAlldatoscentralizadortiposcompras(idcentralizadormes:string){ //con esto traigo mis diferentes tipos de compras  
      
      const resultadoSumatotaltodo = await this.centralizadormesRepository
      .createQueryBuilder('centralizadormes')
      
      .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
       idcentralizadormes: idcentralizadormes,
      })
      .select('centralizadormes.bruto')
      .addSelect('centralizadormes.excento')
      .addSelect('centralizadormes.totalcompras')
      .getRawMany();
      
      
      return resultadoSumatotaltodo
    
  
    }


    
    async findAlldatoscentralizadortotal(idcentralizadormes:string){ //con esto traigo mis diferentes tipos de compras  
      
      const resultadodatoscentralizadortotal = await this.centralizadormesRepository
      .createQueryBuilder('centralizadormes')
      .innerJoin('otrossumas', 'os', 'os.idcentralizadormes = centralizadormes.idcentralizadormes')
      .where('centralizadormes.idcentralizadormes = :idcentralizadormes ', {
       idcentralizadormes: idcentralizadormes,
      })
      .select('centralizadormes.bruto')
      .addSelect('os.montootros')
      .addSelect('os.nombrecobro')
      .getRawMany();
      
      
      return resultadodatoscentralizadortotal
    
  
    }



    


   

 

 
  


}
