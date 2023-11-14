
import { Centralizador } from "src/centralizador/entities/centralizador.entity";
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("cobro")
export class Cobro {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idcobro: string;
    
    @Column()
    tipo:number;
    
    @Column()
    fecha:Date;
    
    @Column()
    estado:number;
    
    @Column()
    monto:number;
    
    @Column()
    responsablepago:string;
    
    @Column()
    respcobro:number;
    
    @Column()    
    observacion:string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   
    

    @Column({type:'uuid'})
    idmescentralizador:string;
   
    
    @ManyToOne(() => Centralizadormes)
    @JoinColumn({ name: 'idmescentralizador' }) 
    centralizadormes: Centralizadormes;

}