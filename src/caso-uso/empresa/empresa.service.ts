import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
import { UpdateEmpresaDto } from './dto/updateEmpresa.dto';
import { UpdateResult } from 'typeorm';


@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>
  ) {}

  async findAll(){
    return await this.empresaRepository.find();
  }

  
  /*async findOne(idempresa:number): Promise<Empresa> {
    const fecha = new Date();
    const anioactual = fecha.getFullYear();
  
  return await this.empresaRepository
  .createQueryBuilder('empresa')
  .innerJoin(
    'dato',
    'dato',
    'empresa.idempresa = :idempresa AND dato.anio = :anio ',
    { idempresa: idempresa, anio: anioactual}
  )
  .getMany();
  }
  }*/
  async findOne(idempresa:number){
    //return idempresa;
  return await this.empresaRepository.findOneBy({idempresa});

  }
  
 






  //async update(idempresa:number,updateEmpresaDto: UpdateEmpresaDto): Promise<UpdateResult>{  //EL PROMISE ERA LA CLAVE PARA QUE DE TODO
    
    
   // return await this.empresaRepository.update(idempresa, updateEmpresaDto)

  //}
/*
  async create(data: any): Promise<EmpresaEntity> {
    const empresa = this.empresaRepository.create(data);
    return this.empresaRepository.save(empresa);
  }

  async update(id: string, data: any): Promise<EmpresaEntity | undefined> {
    await this.empresaRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.empresaRepository.delete(id);
  }
  async delete (id: string): Promise,>void
  */

}
