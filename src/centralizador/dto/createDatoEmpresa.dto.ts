
import {  IsNumber,  IsString,  IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class CreateDatoEmpresaDto {
  
  @IsString()
  idcentralizador: string;
  
  @IsNumber()
  anio:number;

  
  @IsNumber()
  id_empresa: number;
  
  

  
}