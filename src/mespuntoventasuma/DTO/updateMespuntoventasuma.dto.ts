import {  IsDate, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateMespuntoventasumaDto {
  
  @IsString()
  @IsOptional()
  idmespuntoventasuma?: string;

  @IsString()
  @IsOptional()
  idcentralizadormes?: string;

  @IsNumber()
  @IsOptional()
  idpuntoventa?: number;
 
}