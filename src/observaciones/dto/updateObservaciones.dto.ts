import { IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdateObservacionesDto {
  
  @IsString()
  @IsOptional()  
  idobservaciones?: string;
    
 
  @IsString()
  @IsOptional()  
  observacion?:string;
    
  @IsNumber()
  @IsOptional()  
  iduser?:number;

  @IsString()
  @IsOptional()  
  idmescentralizador?:string;
   
 
}