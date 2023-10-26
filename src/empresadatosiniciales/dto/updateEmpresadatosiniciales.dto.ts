import { Exclude } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEmpresadatosinicialesDto {
    
    @IsString()
    @IsOptional()
    idempresadatosiniciales?:string;
  
    @IsNumber()
    @IsOptional()
    balance?:number;

    @IsNumber()
    @IsOptional()
    total?:number;

    @IsNumber()
    @IsOptional()
    trabajo?:number;

    @IsBoolean()
    @IsOptional()
    planillas?:boolean;



}