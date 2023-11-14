import {  IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdateVentaTalonarioDto {

  @IsString()
  @IsOptional()
  idventatalonario?:string;
   
  @IsNumber()
  @IsOptional()
  numtalonario?:number;

  @IsNumber()
  @IsOptional()
  factinicial?:number;
  
  @IsNumber()
  @IsOptional()
  factfinal?:number;
    
  @IsNumber()
  @IsOptional()
  tipo?:number;
    
  @IsNumber()
  @IsOptional()
  montototal?:number;

  @IsString()  
    @IsOptional()
  idpuntoventaactividad?:string;

  @IsString()  
    @IsOptional()
    idcentralizadormes?: string;
    
  



  
  
   
   
 
}