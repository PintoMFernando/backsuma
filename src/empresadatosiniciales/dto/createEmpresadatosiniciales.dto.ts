import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateEmpresadatosinicialesDto {
  
  @IsString()
  idempresadatosiniciales?:string;
  
  @IsNumber()
  balance?:number;

  @IsNumber()
  total?:number;

  @IsNumber()
  trabajo?:number;

  @IsBoolean()
  planillas?:boolean;
  
  @IsNumber()
  id_empresa?: number;
  
}