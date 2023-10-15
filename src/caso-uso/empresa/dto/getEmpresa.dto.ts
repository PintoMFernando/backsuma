import { IsBoolean, IsInt, IsNumber, IsNumberString, IsString } from 'class-validator';

export class GetEmpresaDto {
  
  @IsNumber()
  idempresa: number
  @IsString()
  razonsocial:string
  @IsNumber()
  nit:number
  @IsNumber()
  num_empresa:number
  @IsNumber()
  ter_cliente:number
  @IsString()
  mescierre:string
  @IsString()
  direccionfiscal:string
  @IsNumber()
  telefonofiscal:number
  @IsNumber()
  idresponsable:number
  @IsString()
  actividad:string
  @IsString()
  usuario_ofv:string
  @IsString()
  pass_ofv:string
  @IsString()
  tarjeta_galileo:string
  @IsString()
  pin_galileo:string
  @IsString()
  database:string
  @IsNumber()
  comision:number
  @IsNumber()
  estado:number
  @IsString()
  trial: string
  @IsString()
  obs: string
  @IsNumber()
  balance:number
  @IsNumber()
  total:number
  @IsNumber()
  trabajo:number
  @IsBoolean()
  planillas:boolean
  
}