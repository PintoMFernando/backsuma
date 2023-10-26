
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateVentaTalonarioDto {
  
  @IsString()
  idventatalonario: string;
   
  @IsNumber()
  numtalonario:number;

  @IsNumber()
  factinicial:number;
  
  @IsNumber()
  factfinal:number;
    
  @IsNumber()
  tipo:number;
    
  @IsNumber()
  montototal:number;
    


  @IsNumber()
  idpuntoventa:number;
   
  
}