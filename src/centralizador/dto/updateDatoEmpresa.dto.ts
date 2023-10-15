import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class UpdateDatoEmpresaDto {
  
  @IsString()
  @IsOptional()
  idcentralizador?: string;

  @IsNumber()
  @IsOptional()
  anio?:number;

  

  @IsNumber()
  @IsOptional()
  id_empresa?: number;

 
}