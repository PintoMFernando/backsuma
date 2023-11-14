
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Comprassumasdetalle } from "src/comprassumasdetalle/entities/comprassumasdetalle.entity";
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , OneToMany, OneToOne, UpdateDateColumn} from "typeorm";


@Entity("comprassumas")
export class Comprassumas {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddd
    idcomprasuma: string;
    
    @Column({nullable:true})
    tipo:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    total100:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totaldescuento100:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totalcompra100:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totalgasolina:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totalgasolinadesceunto:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})
    totalice:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totalicecredito:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totaldescuentoicecredito:number;
    
    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    totaltodoicecredito:number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
    
    @DeleteDateColumn()
    deletedAtobs:Date;
   
    

    @Column({type:'uuid'})
    idcentralizadormes:string;
   
    
   // @ManyToOne(() => Centralizadormes)
    //@JoinColumn({ name: 'idcentralizadormes' }) 
    //centralizadormes: Centralizadormes;

  


    //@OneToMany(() => Comprassumasdetalle, comprassumasdetalle => comprassumasdetalle.idcomprasuma)
    //@JoinColumn({ name: 'idcomprasuma' }) 
    //comprassumasdetalles: Comprassumasdetalle[];
    

   
    @OneToMany(() => Comprassumasdetalle, (comprassumasdetalle) => comprassumasdetalle.comprassumas,{ cascade:  true})
    @JoinColumn({ name: 'idcentralizadormes' }) 
    comprassumasdetalle: Comprassumasdetalle[];
    
    @OneToOne(() => Centralizadormes, centralizadormes => centralizadormes.comprassumas)
    @JoinColumn({ name: 'idcentralizadormes' }) 
    centralizadormes: Centralizadormes;
    //@OneToMany(()=> Comprassumasdetalle,(comprassumasdetalle)=> comprassumasdetalle.comprassumas)
    //comprassumasdetalle : Comprassumasdetalle[];


     
    

}