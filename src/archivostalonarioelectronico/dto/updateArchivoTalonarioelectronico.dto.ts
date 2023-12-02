import {  IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdateArchivoTalonarioelectronicoDto {

  @IsString()
  @IsOptional()
  idarchivotalonarioelectronico?:string;
   
  

  @IsString()
  @IsOptional()
  filename?:string ;
  //falta archivo
  @IsString()
  @IsOptional()
  observacion?:string;
    
  @IsNumber()
  @IsOptional()
  idventatalonario?:string;
   
 
}