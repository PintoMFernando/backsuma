
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateCentralizadorMesDto {
  
  @IsString()
  icentralizadormes: string;

  @IsDate()
  fecha:Date;
   
  @IsNumber()
  it:number;
  
  @IsNumber()
  iva:number;
    
  @IsNumber()
  saldoiva:number;
    
  @IsNumber()
  saldoiue:number;
    
  @IsNumber()
  totalventas:number;
    
  @IsNumber()
  totalcompras:number;
    
  @IsNumber()
  estado:number;
    
  @IsNumber()
  total:number;
    
  @IsNumber()
  comision:number;
  
  @IsNumber()
  mes:number;
    
  @IsNumber()
  respsuma:number;
  
  @IsNumber()
  respdeclaracion:number;
  
  @IsNumber()
  resplibro:number;
  
  @IsNumber()
  respbancarizacion:number;
  
  @IsNumber()    
  respaprobacion:number;

  @IsString()    
  observacion:string;
  
  @IsNumber()    
    ivaimpuestos:number;
    
  @IsString()
  idcentralizador:string;
}