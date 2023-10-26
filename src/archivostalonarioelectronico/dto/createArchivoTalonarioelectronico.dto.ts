
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateArchivoTalonarioelectronicoDto {
  
  @IsString()
  idarchivotalonarioelectronico: string;
   
  @IsString()
  archivo?:string ;
  
  @IsString()
  observacion?:string;

  @IsString()
  idventatalonario?:string;
   
  
}