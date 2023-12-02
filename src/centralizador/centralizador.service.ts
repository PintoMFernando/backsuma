import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateDatoEmpresaDto } from './dto/updateDatoEmpresa.dto';
import { Centralizador} from './entities/centralizador.entity';
import { UUID } from 'crypto';
import { CreateDatoEmpresaDto } from './dto/createDatoEmpresa.dto';

@Injectable()
export class CentralizadorService {
    
  constructor(
    @InjectRepository(Centralizador)
    private readonly centralizadorRepository: Repository<Centralizador>
  ) {}

  async create(createdatoEmpresaDto: CreateDatoEmpresaDto){
   
    //const dato = this.empresadatoRepository.create(createdatoEmpresaDto);
   // if(createdatoEmpresaDto.id_empresa){
      //throw new BadRequestException('ya existe este anio');

   // }
    
   console.log(createdatoEmpresaDto);
    return await this.centralizadorRepository.save(createdatoEmpresaDto);
  }
  

  async findAll(){
    return await this.centralizadorRepository.find();
  }

  /*async findAllByIdEmpresa(idempresa){ //esto me puede servir para cuando haga la nueva tabla con los campos que faltan
    const fecha = new Date();                  // por lo visto jala desde aqui 
    const anioactual = fecha.getFullYear();
    
    return await this.centralizadorRepository.find({
      where:{
        'empresa':{idempresa:idempresa },
        'anio': 2022

      },
      
      relations:['empresa']
    });
  }
*/
  /*async busquedatablacentralizador(idempresa,anio): Promise<boolean>{ //esto me puede servir para cuando haga la nueva tabla con los campos que faltan
    const datoExistente = await this.centralizadorRepository.findOne({
      where: {
        id_empresa: idempresa, // Reemplaza 'campo1' con el nombre real del campo en tu entidad.
        anio: anio, // Reemplaza 'campo2' con el nombre real del campo en tu entidad.
      },

    }
      
      );
     console.log("el dato existe!!");
    return !!datoExistente;
  }
*/
async busquedatablacentralizador(idempresa,anio){ //esto me puede servir para cuando haga la nueva tabla con los campos que faltan
  return await  this.centralizadorRepository.findOne({
    where: {
      id_empresa: idempresa, 
      anio: anio, 
    },

  }
    
    );
   
}



 
  async findOne(idcentralizador:string){
    //return idempresa;c
  return await this.centralizadorRepository.findOneBy({idcentralizador});

  }

  async update(idcentralizador:string,updateEmpresaDto: UpdateDatoEmpresaDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
   
    return await this.centralizadorRepository.update(idcentralizador, updateEmpresaDto)

  }

}
