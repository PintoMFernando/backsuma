
import { Transform } from 'class-transformer';
import {  IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, MinDate } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


export class CreateComprassumasDto {
  
     
    @IsString () 
    idcomprasuma: string;
    
    @IsNumber()
    tipo:number;
    
    @IsNumber()
    total100:number;

    @IsNumber()
    totaldescuento100:number;
    
    @IsNumber()
    totalcompra100:number;
    
    @IsNumber()
    totalgasolina:number;
    
    @IsNumber()
    totalgasolinadesceunto:number;
    
    @IsNumber()
    totalice:number;
    
    @IsNumber()    
    totalicecredito:number;

    @IsNumber()    
    totaldescuentoicecredito:number;
    
    @IsNumber()    
    totaltodoicecredito:number;
   
    

    @IsString()
    idcentralizadormes:string;
   
}