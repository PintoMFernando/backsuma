import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividades } from './entities/actividades.entity';
import { Between, In, Repository } from 'typeorm';

@Injectable()
export class ActividadesService {

    constructor(
        @InjectRepository(Actividades)
        private readonly centralizadorRepository: Repository<Actividades>
      ) {}
    
     
    async getactividades(){ //esto me puede servir para cuando haga la nueva tabla con los campos que faltan
      return await  this.centralizadorRepository.find({
        where: {
           seccion: In(['A' , 'B', 'C' , 'D', 'E' , 'F', 'G' , 'H', 'I' , 'J', 'K' , 'L', 'M' , 'N', 'O' , 'P', 'Q' , 'R', 'S' , 'T', 'U']), 
           division: 0,
           grupo: 0
        },
        order: {
            idactividades: 'ASC' 
          },
        select:['idactividades','seccion','nombre']     
      }
        );   
    }  

      
    async getactividadesseccion(seccion:string){ //esto me puede servir para cuando haga la nueva tabla con los campos que faltansss
        console.log(seccion);
        return await  this.centralizadorRepository.find({
          where: {
             seccion: seccion, 
             division: Between(1, 99),
             grupo: 0
          },
          order: {
              idactividades: 'ASC' 
            },
          select:['idactividades','nombre','seccion','division']     
        }
          );   
      }  
        
    async getactividadesdivision(seccion:string,division:number){ //esto me puede servir para cuando haga la nueva tabla con los campos que faltan
        return await  this.centralizadorRepository.find({
          where: {
             seccion: seccion, 
             division: division,
             grupo:  Between(1, 990)
          },
          order: {
              idactividades: 'ASC' 
            },
          select:['idactividades','nombre','seccion','division']     
        }
          );   
      }  


     
      
        
     
}
