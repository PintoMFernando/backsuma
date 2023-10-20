

import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("sumatalonario")
export class Sumatalonario {

    
    @Column({primary:true, type:'uuid'})
    idsumatalonario: string;
     
    @Column()
    numfactura:number;
  
    @Column()
    monto:number;
    
    @Column()
    estado:number;
      
    @Column({type:'uuid'})
    idventatalonario:string;
     
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   
    
    @DeleteDateColumn()
    deletedAtobs:Date;
   
    
    @ManyToOne(() => Ventatalonario)
    @JoinColumn({ name: 'idventatalonario' }) 
    ventatalonario: Ventatalonario;


}