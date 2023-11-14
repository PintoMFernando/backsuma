import {  IsDate, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateComprassumasDto {
  
   
  @IsString ()
  @IsOptional() 
  idcomprasuma?: string;
  
  @IsNumber()
  @IsOptional()
    tipo?:number;
    
    @IsNumber()
    @IsOptional()
    total100?:number;

    @IsNumber()
    @IsOptional()
    totaldescuento100?:number;
    
    @IsNumber()
    @IsOptional()
    totalcompra100?:number;
    
    @IsNumber()
    @IsOptional()
    totalgasolina?:number;
    
    @IsNumber()
    @IsOptional()
    totalgasolinadesceunto?:number;
    
    @IsNumber()
    @IsOptional()
    totalice?:number;
    
    @IsNumber()
    @IsOptional()    
    totalicecredito?:number;

    @IsNumber()
    @IsOptional()    
    totaldescuentoicecredito?:number;
    
    @IsNumber()
    @IsOptional()    
    totaltodoicecredito?:number;

  @IsString()
  @IsOptional()
  idcentralizadormes?:string;
 
 
}