
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Comprassumasdetalle } from "src/comprassumasdetalle/entities/comprassumasdetalle.entity";
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , OneToMany, OneToOne, UpdateDateColumn} from "typeorm";


@Entity("otrossumas")
export class Otrossumas {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idotrossumas: string;
    
    @Column({nullable:true, type:'text'})
    nombrecobro:string;
    
    @Column({nullable:true, type:'text'})
    observaciones:string;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    montootros:number;


    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
    
    @Column({type:'uuid'})
    idcentralizadormes:string;
   
    
 
   
    
    @ManyToOne(()=> Centralizadormes,(centralizadormes)=> centralizadormes.otrossumas)
    @JoinColumn({ name: 'idcentralizadormes' }) 
    centralizadormes: Centralizadormes


     
    

}