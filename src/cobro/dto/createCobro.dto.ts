
import { Transform } from 'class-transformer';
import {  IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MinDate } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


export class CreateCobroDto {
  
    @IsString()  
    idcobro: string;
    
    @IsNumber()
    tipo:number;
    
    @IsNotEmpty()
    @Transform( ({ value }) => new Date(value))
    @IsDate()
    //@MinDate(new Date())
 
    fecha:Date;
 
    
    @IsNumber()
    estado:number;
    
    @IsNumber()
    monto:number;
    
    @IsString()
    responsablepago:string;
    
    @IsNumber()
    respcobro:number;
    
    @IsString()    
    observacion:string;

  

    @IsString()
    idmescentralizador:string;
   
}