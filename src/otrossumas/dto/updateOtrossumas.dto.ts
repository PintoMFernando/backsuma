import {   IsNumber, IsOptional, IsString} from 'class-validator';



export class UpdateOtrossumasDto {
  
   
  @IsString () 
  @IsOptional()
  idotrossumas?: string;
  
  @IsString()
  @IsOptional()
  observaciones?:string;
  
  @IsNumber()
  @IsOptional()
  montootros?:number;



  @IsString()
  @IsOptional()
  idcentralizadormes?:string;
 
 
}