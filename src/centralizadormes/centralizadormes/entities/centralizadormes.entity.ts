
import { Centralizador } from "src/centralizador/entities/centralizador.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("centralizadormes")
export class Centralizadormes {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradadddd
    idcentralizadormes: string;
    
    @Column()
    fecha:Date;
    
    @Column()
    it:number;
    
    @Column()
    iva:number;
    
    @Column()
    saldoiva:number;
    
    @Column()
    saldoiue:number;
    
    @Column()
    totalventas:number;
    
    @Column()
    totalcompras:number;
    
    @Column()
    estado:number;
    
    @Column()
    total:number;
    
    @Column()
    comision:number;
    
    @Column()
    mes:number;
    
    @Column()
    respsuma:number;
    
    @Column()
    respdeclaracion:number;
    
    @Column()
    resplibro:number;
    
    @Column()
    respbancarizacion:number;
    
    @Column()    
    respaprobacion:number;

    @Column()    
    observacion:string;
    @Column()    
    ivaimpuestos:number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   

    @Column({type:'uuid'})
    idcentralizador:string;
   
    
    @ManyToOne(() => Centralizador)
    @JoinColumn({ name: 'idcentralizador' }) 
    centralizador: Centralizador;

}

//function unique(): (target: typeof Centralizadormes) => void | typeof Centralizadormes {
  //  throw new Error("Function not implemented.");
//}
