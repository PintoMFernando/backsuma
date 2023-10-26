


import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("archivoelectronicotalonario")
export class Archivoelectronicotalonario {

    
    @Column({primary:true,type:'uuid'})
    idarchivotalonarioelectronico: string;
     
   
      
    @Column({ type: 'varchar', length: 300, nullable: true })
    archivo:string | null;

    @Column({ nullable: true })
    observacion:string | null;
      
      
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