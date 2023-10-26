import {  IsDate, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateComprassumasdetalleDto {
  
   
    @IsString()
    @IsOptional() 
    idcomprasumadetalle?: string;
    
    @IsNumber()
    @IsOptional()
    monto?:number;
    
    
    @IsNumber()
    @IsOptional()
    descuento?:number;
    
    @IsNumber()
    @IsOptional()    
    ice100?:number;

    @IsNumber()
    @IsOptional()    
    icecreditofis?:number;
    
    @IsNumber()
    @IsOptional()    
    descuentoice100?:number;

    @IsString()
    @IsOptional()
    idcomprasuma?:string;
 
 
}