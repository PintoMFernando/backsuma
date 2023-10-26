import {  IsDate, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateComprassumasDto {
  
   
  @IsString ()
  @IsOptional() 
  idcomprasuma?: string;
  
  @IsNumber()
  @IsOptional()
  tipo?:number;
  
  @IsNumber()
  @IsOptional()
  total?:number;
  
  @IsNumber()
  @IsOptional()
  descuento?:number;

  @IsNumber()
  @IsOptional()
  totalice?:number;
  
  @IsNumber()
  @IsOptional()    
  totalicecredito?:number;

  @IsNumber()
  @IsOptional()    
  totaldescuento?:number;
  
  @IsNumber()
  @IsOptional()    
  totalcompras?:number;

 
  

  @IsNumber()
  @IsOptional()
  idpuntoventa?:number;
 
 
}