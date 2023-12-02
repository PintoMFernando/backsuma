

import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("sumatalonario")
export class Sumatalonario {

    
    @Column({primary:true, type:'uuid'})
    idsumatalonario: string;
     
    @Column()
    numfactura:number;
  
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
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
   
    
    //@ManyToOne(() => Ventatalonario,{cascade:true })
    //@JoinColumn({ name: 'idventatalonario' }) 
    //ventatalonario: Ventatalonario;

    @ManyToOne(() => Ventatalonario, ventatalonario => ventatalonario.sumatalonarios,{onDelete: 'CASCADE'})
    @JoinColumn({ name: 'idventatalonario' }) 
    ventatalonario: Ventatalonario;


}