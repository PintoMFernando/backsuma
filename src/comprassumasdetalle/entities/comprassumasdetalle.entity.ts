
import { Comprassumas } from "src/comprassumas/entities/comprassumas.entity";

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , UpdateDateColumn} from "typeorm";


@Entity("comprassumasdetalle")
export class Comprassumasdetalle {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idcomprasumadetalle: string;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    monto:number;
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    montogasolina:number;
    
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    descuento:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    ice100:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    icecreditofis:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    descuentoice100:number;

    

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
    
    @DeleteDateColumn()
    deletedAtobs:Date;
   
    @Column({type:'uuid'})
    idcomprasuma:string;
   
    
    //@ManyToOne(() => Comprassumas)
    //@JoinColumn({ name: 'idcomprasuma' }) 
    ///comprassumas: Comprassumas;
    
    @ManyToOne(()=> Comprassumas,(comprassumas)=> comprassumas.comprassumasdetalle,)
    @JoinColumn({ name: 'idcomprasuma' }) 
    comprassumas: Comprassumas

}