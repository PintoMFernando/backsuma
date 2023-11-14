import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdatePuntoventaactividadDto {
  
    @IsString()  
    @IsOptional()
    idpuntoventaactividad?: string;
    @IsNumber()  
    @IsOptional()
    idactividades?: number;

    @IsBoolean()  
    @IsOptional()
    estado?: boolean;

    @IsNumber()  
    @IsOptional()
    idpuntoventa?: number;

    
    
   
 
}