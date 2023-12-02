import {  IsDate, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';



export class UpdateCentralizadorMesDto {
  
  @IsString()
   @IsOptional()  //va estar autogeneradadddd
    idcentralizadormes?: string;
    
    @IsNumber()
@IsOptional()
    fecha?:Date;
    
    @IsNumber()

@IsOptional()
    it?:number;
    
    @IsNumber()

@IsOptional()
    iva?:number;
    
    @IsNumber()

@IsOptional()
    saldoiva?:number;
    
    @IsNumber()

@IsOptional()
    saldoiue?:number;
    
    @IsNumber()

@IsOptional()
    totalventas?:number;
    
    @IsNumber()

@IsOptional()
    totalcompras?:number;
    
    @IsNumber()

@IsOptional()
    estado?:number;
    
    @IsNumber()

@IsOptional()
    total?:number;
    
    @IsNumber()

@IsOptional()
    comision?:number;
    
    @IsNumber()

@IsOptional()
    mes?:number;
    
    @IsNumber()

@IsOptional()
    respsuma?:number;
    
    @IsNumber()

@IsOptional()
    respdeclaracion?:number;
    
    @IsNumber()

@IsOptional()
    resplibro?:number;
    
    @IsNumber()

@IsOptional()
    respbancarizacion?:number;
    
    @IsNumber()
     @IsOptional
    ()    
    respaprobacion?:number;

    @IsNumber()
     @IsOptional
    ()    
    observacion?:string;
    @IsNumber()
     @IsOptional
    ()    
    ivaimpuestos?:number;

    @IsNumber()
     @IsOptional()    
    otros?:number;

    @IsNumber()  
    @IsOptional()     
    bruto?:number;
   
    @IsNumber()    
    @IsOptional()   
    excento?:number;

    @IsNumber()   
    @IsOptional()
    totaltodo?:number;

    @IsString()
    @IsOptional()
    idcentralizador?:string;
 
}