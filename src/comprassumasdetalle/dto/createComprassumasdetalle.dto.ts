
import { Transform } from 'class-transformer';
import {  IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MinDate } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


export class CreateComprassumasdetalleDto {
  
     
    
    @IsString() 
    idcomprasumadetalle: string;
    
    @IsNumber()
    monto:number;
    
    
    @IsNumber()
    descuento:number;
    
    @IsNumber()    
    ice100:number;

    @IsNumber()    
    icecreditofis:number;
    
    @IsNumber()    
    descuentoice100:number;

    @IsString()
    idcomprasuma:string;
   
   
}