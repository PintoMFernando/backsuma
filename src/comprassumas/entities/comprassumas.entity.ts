
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("comprassumas")
export class Comprassumas {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idcomprasuma: string;
    
    @Column()
    tipo:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    total:number;
    
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totalice:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totalicecredito:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totaldescuento:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totalcompras:number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
    
    @DeleteDateColumn()
    deletedAtobs:Date;
   
    

    @Column()
    idpuntoventa:number;
   
    
    @ManyToOne(() => Puntoventa)
    @JoinColumn({ name: 'idpuntoventa' }) 
    puntoventa: Puntoventa;

}