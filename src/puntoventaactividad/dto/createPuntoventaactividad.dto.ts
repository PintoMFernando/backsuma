
import {  IsNumber, IsString } from 'class-validator';



export class CreatePuntoventaactividadDto {
  
    @IsString()  
    idpuntoventaactividad: string;
    @IsString()  
    idactividades: string;
    @IsString()  
    idpuntoventa: number;
    
 
   
    

   
}