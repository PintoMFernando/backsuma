import {  IsDate, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateCobroDto {
  
  @IsString()
  @IsOptional()  
  idcobro?:string;
  
  @IsNumber()
  @IsOptional()
  tipo?:number;
  
  @IsDate()
  @IsOptional()
  fecha?:Date;
  
  
  @IsNumber()
  @IsOptional()
  estado?:number;
  
  @IsNumber()
  @IsOptional()
  monto?:number;
  
  @IsString()
  @IsOptional()
  responsablepago?:string;
  
  @IsNumber()
  @IsOptional()
  respcobro?:number;
  
  @IsString()
  @IsOptional()    
  observacion?:string;

 

 

  @IsString()
  @IsOptional()
  idmescentralizador?:string;
 
}