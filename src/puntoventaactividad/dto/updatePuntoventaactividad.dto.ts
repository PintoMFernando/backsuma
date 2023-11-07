import { IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdatePuntoventaactividadDto {
  
    @IsString()  
    @IsOptional()
    idpuntoventaactividad?: string;
    @IsString()  
    @IsOptional()
    idactividades?: string;
    @IsString()  
    @IsOptional()
    idpuntoventa?: number;
    
   
 
}