
import {  IsNumber, IsString } from 'class-validator';



export class CreateObservacionesDto {
  
    @IsString()  
    idobservaciones: string;
    
 
    @IsString()
    observacion:string;
    
    @IsNumber()
    iduser:number;

    @IsString()
    idmescentralizador:string;
   
}