
import {   IsNumber, IsString} from 'class-validator';



export class CreateOtrossumasDto {
  
     
    @IsString () 
    idotrossumas: string;
    
    @IsString()
    observaciones:string;

    @IsString()
    nombrecobro:string;
    
    @IsNumber()
    montootros:number;

    @IsString()
    idcentralizadormes:string;
   
}