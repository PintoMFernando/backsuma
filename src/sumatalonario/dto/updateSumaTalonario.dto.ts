import {  IsNumber, IsOptional, IsString } from 'class-validator';



export class UpdateSumaTalonarioDto {

  @IsString()
  @IsOptional()
  idsumatalonario?: string;
   
  @IsNumber()
  @IsOptional()
  numfactura?:number;

  @IsNumber()
  @IsOptional()
  monto?:number;
  
  @IsNumber()
  @IsOptional()
  estado?:number;
    
  @IsString()
  @IsOptional()
  idventatalonario?:string;
   
   
 
}