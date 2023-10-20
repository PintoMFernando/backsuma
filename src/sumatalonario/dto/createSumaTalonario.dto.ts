
import {  IsNumber, IsString } from 'class-validator';



export class CreateSumaTalonarioDto {
  
  @IsString()
  idsumatalonario: string;
   
  @IsNumber()
  numfactura:number;

  @IsNumber()
  monto:number;
  
  @IsNumber()
  estado:number;
    
  @IsString()
  idventatalonario:string;
   
   
  
}