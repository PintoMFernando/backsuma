import {  IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdateArchivoTalonarioelectronicoDto {

  @IsString()
  @IsOptional()
  idarchivotalonarioelectronico?:string;
   
  
  //falta archivo
  @IsString()
  @IsOptional()
  observacion?:string;
    
  @IsNumber()
  @IsOptional()
  idventatalonario?:string;
   
 
}