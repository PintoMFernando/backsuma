

import { Centralizadormes } from "src/centralizadormes/centralizadormes/entities/centralizadormes.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("observaciones")
export class Observaciones {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idobservaciones: string;
    
    @Column({length:200})
    observacion:string;
    
    @Column()
    iduser:number;
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   
    

    @Column({type:'uuid'})
    idmescentralizador:string;

    @DeleteDateColumn()
    deletedAtobs:Date;
   
    
    @ManyToOne(() => Centralizadormes)
    @JoinColumn({ name: 'idmescentralizador' }) 
    centralizadormes: Centralizadormes;

}