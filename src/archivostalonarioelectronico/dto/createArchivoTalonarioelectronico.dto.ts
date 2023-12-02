
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateArchivoTalonarioelectronicoDto {
  
  @IsString()
  idarchivotalonarioelectronico?: string;
   
  
  
  @IsString()
  filename?:string ;
  
  @IsString()
  observacion?:string;

  @IsString()
  idventatalonario?:string;
   
  
}