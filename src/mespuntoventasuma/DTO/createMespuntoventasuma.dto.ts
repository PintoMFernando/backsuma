
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateMespuntoventasumaDto {
  
  @IsString()
  idmespuntoventasuma: string;

  @IsString()
  idcentralizadormes: string;

  @IsString()
  idpuntoventaactividad: string;


}