import { Exclude } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEmpresaDto {
    
    @IsNumber()
    @IsOptional()
    idempresa?:number;
  
    @IsString()
    @IsOptional()
    razonsocial?:string;

    @IsNumber()
    @IsOptional()
    nit?:number;

    @IsNumber()
    @IsOptional()
    num_empresa?:number;

    @IsNumber()
    @IsOptional()
    ter_cliente?:number;

    @IsString()
    @IsOptional()
    mescierre?:string;

    @IsString()
    @IsOptional()
    direccionfiscal?:string;

    @IsNumber()
    @IsOptional()
    telefonofiscal?:number;

    @IsNumber()
    @IsOptional()
    idresponsable?:number;

    @IsString()
    @IsOptional()
    actividad?:string;

    @IsString()
    @IsOptional()
    usuario_ofv?:string;

    @IsString()
    @IsOptional()
    pass_ofv?:string;

    @IsString()
    @IsOptional()
    tarjeta_galileo?:string;

    @IsString()
    @IsOptional()
    pin_galileo?:string;

    @IsString()
    @IsOptional()
    database?:string;

    @IsNumber()
    @IsOptional()
    comision?:number;

    @IsNumber()
    @IsOptional()
    estado?:number;

    @IsString()
    @IsOptional()
    trial?:string;

    @IsString()
    @IsOptional()
    obs?:string;


}