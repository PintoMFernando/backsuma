
import {  IsBoolean, IsNumber, IsString } from 'class-validator';



export class CreatePuntoventaactividadDto {
  
    @IsString()  
    idpuntoventaactividad: string;
    @IsNumber()  
    idactividades: number;
    @IsNumber()  
    idpuntoventa: number;

    @IsBoolean()  
    
    estado: boolean;

  
    
 
   
    

   
}