import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comprassumasdetalle } from './entities/comprassumasdetalle.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateComprassumasdetalleDto } from './dto/createComprassumasdetalle.dto';
import { UpdateComprassumasdetalleDto } from './dto/updateComprassumasdetalle.dto';
import { Comprassumas } from 'src/comprassumas/entities/comprassumas.entity';

@Injectable()
export class ComprassumasdetalleService {
   
    constructor(
        @InjectRepository(Comprassumasdetalle)
        private readonly comprassumasdetalleRepository: Repository<Comprassumasdetalle>
        
       
     
     
        ) {}
    
  
      async create(createcomprassumasdetalleDto: CreateComprassumasdetalleDto[]) {
       
     
        // Llama al repositorio para guardar la entidad en la base de datosfhfghfghsadasdasASDASD
        return await this.comprassumasdetalleRepository.save(createcomprassumasdetalleDto);
      }

     
       
  async findAllByIdcomprassumasdetalle(idcomprasuma:string){
  
  return await this.comprassumasdetalleRepository.find({
    where:{
      'comprassumas':{idcomprasuma:idcomprasuma},  
    },
    relations:['comprassumas']
  });
  }

  async findAll(idcomprasuma:string){
  
    return await this.comprassumasdetalleRepository.find({
        where: { idcomprasuma: idcomprasuma }
    });
    }


  async update(idcomprassumasdetalle:string, comprassumasdetalleDto: UpdateComprassumasdetalleDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODOO
    return await this.comprassumasdetalleRepository.update(idcomprassumasdetalle, comprassumasdetalleDto)

  }
  
 

 async remove(idcomprasuma:string){
 
    return await this.comprassumasdetalleRepository.delete({idcomprasuma:idcomprasuma}); //elimina todos los datos, cambiamos softdelete por delete
  }



  async findAllsearchgetupdatedelete(idcomprasuma:string,createcomprassumasdetalleDto: CreateComprassumasdetalleDto[]){

    //console.log("mis datos del fronted",createcomprassumasdetalleDto)
 // return idcomprasuma
  const resultadoidcomprasuma = await this.comprassumasdetalleRepository
  .createQueryBuilder('comprassumasdetalle')
  .innerJoin('comprassumas', 'cs', 'cs.idcomprasuma = comprassumasdetalle.idcomprasuma')
  .where('comprassumasdetalle.idcomprasuma = :idcomprasuma ', {
    idcomprasuma: idcomprasuma,
       })
  .select('cs.idcomprasuma')
  //.addSelect('')
  .getRawOne();
 //return resultadoComprasBruto
 
if (resultadoidcomprasuma) {//ha datos 
  console.log("entra ami borrar")
  await this.remove(idcomprasuma);
  await this.create(createcomprassumasdetalleDto);
  await this.calculospost(idcomprasuma);
 
  }
  else {  
    console.log("no entra ami borrar")  
    await this.create(createcomprassumasdetalleDto);
    await this.calculospost(idcomprasuma);
  }



  }

  async calculospost(idcomprasuma:string) {
    console.log("entra yes",idcomprasuma)
    const calculopostcomprassumas = await this.comprassumasdetalleRepository
    .createQueryBuilder('comprassumasdetalle')
    .innerJoin('comprassumas', 'cs', 'cs.idcomprasuma = comprassumasdetalle.idcomprasuma')
    .where('comprassumasdetalle.idcomprasuma = :idcomprasuma ', {
      idcomprasuma: idcomprasuma,
         })
    .select('SUM(comprassumasdetalle.ice100) as totalice')
    .addSelect('SUM(comprassumasdetalle.monto) as total100')
    .addSelect('SUM(comprassumasdetalle.montogasolina) as totalgasolina')
    .addSelect('SUM(comprassumasdetalle.icecreditofis) as totalicecreditofiscal')
    .addSelect('SUM(comprassumasdetalle.descuentoice100) as totaldescuento')
    .getRawOne();
   
  
    const totalice = parseFloat(calculopostcomprassumas.totalice);
    const total100 = parseFloat(calculopostcomprassumas.total100);
    const totalgasolina = parseFloat(calculopostcomprassumas.totalgasolina);
    const totalicecredito = parseFloat(calculopostcomprassumas.totalicecreditofiscal);
    const totaldescuento = parseFloat(calculopostcomprassumas.totaldescuento);
   
    const resultComprassumas =  await this.comprassumasdetalleRepository
   
    .createQueryBuilder()
    .update(Comprassumas)
    .set({ totalice: totalice, 
          total100:total100,
          tipo:1,
          totalgasolina:totalgasolina,
          totalicecredito:totalicecredito,
          totaldescuento100:totaldescuento,
        })
    .where('idcomprasuma = :id', { id: idcomprasuma })
    .execute();
    console.log("entra yes",resultComprassumas)
    return resultComprassumas;
  }
}
