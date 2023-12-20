


import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("archivoelectronicotalonario")
export class Archivoelectronicotalonario {

    
    @Column({primary:true,type:'uuid'})
    idarchivotalonarioelectronico: string;
     
   
      
   

    @Column({ nullable: true })
     filename?:string ;
  

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
   
    
    @ManyToOne(() => Ventatalonario, ventatalonario => ventatalonario.sumatalonarioelectronicos,{onDelete: 'CASCADE'})
    @JoinColumn({ name: 'idventatalonario' }) 
    ventatalonario: Ventatalonario;





}