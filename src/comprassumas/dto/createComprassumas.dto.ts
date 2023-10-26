
import { Transform } from 'class-transformer';
import {  IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MinDate } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


export class CreateComprassumasDto {
  
     
    @IsString () 
    idcomprasuma: string;
    
    @IsNumber()
    tipo:number;
    
    @IsNumber()
    total:number;
    
    
    @IsNumber()
    totalice:number;
    
    @IsNumber()    
    totalicecredito:number;

    @IsNumber()    
    totaldescuento:number;
    
    @IsNumber()    
    totalcompras:number;

   
    

    @IsNumber()
    idpuntoventa:number;
   
}