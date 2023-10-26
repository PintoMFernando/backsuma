

import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("ventatalonario")
export class Ventatalonario {

    
    @Column({primary:true,type:'uuid'})
    idventatalonario: string;
     
    @Column()
    numtalonario:number;
  
    @Column()
    factinicial:number;
    
    @Column()
    factfinal:number;
      
    @Column()
    tipo:number;
      
    @Column({default:0, type: 'numeric', precision: 18, scale: 3,nullable:true})
    montototal:number;
      
      
    @Column()
    idpuntoventa:number;
     
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   
    
    @DeleteDateColumn()
    deletedAtobs:Date;
   
    
    @ManyToOne(() => Puntoventa)
    @JoinColumn({ name: 'idpuntoventa' }) 
    puntoventa: Puntoventa;

}