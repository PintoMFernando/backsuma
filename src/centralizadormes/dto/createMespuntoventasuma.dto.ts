
import {  IsDate, IsNumber, IsString, IsUUID } from 'class-validator';



export class CreateCentralizadorMesDto {
  
  @IsString()  //va estar autogeneradadddd
    idcentralizadormes: string;
    
    @IsNumber()
    fecha:Date;
    
    @IsNumber()
    it:number;
    
    @IsNumber()
    iva:number;
    
    @IsNumber()
    saldoiva:number;
    
    @IsNumber()
    saldoiue:number;
    
    @IsNumber()
    totalventas:number;
    
    @IsNumber()
    totalcompras:number;
    
    @IsNumber()
    estado:number;
    
    @IsNumber()
    total:number;
    
    @IsNumber()
    comision:number;
    
    @IsNumber()
    mes:number;
    
    @IsNumber()
    respsuma:number;
    
    @IsNumber()
    respdeclaracion:number;
    
    @IsNumber()
    resplibro:number;
    
    @IsNumber()
    respbancarizacion:number;
    
    @IsNumber()    
    respaprobacion:number;

    @IsNumber()    
    observacion:string;
    @IsNumber()    
    ivaimpuestos:number;

    @IsNumber()    
    otros:number;

    @IsString()
    idcentralizador:string;


}