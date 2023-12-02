
import { Centralizador } from "src/centralizador/entities/centralizador.entity";
import { Comprassumas } from "src/comprassumas/entities/comprassumas.entity";
import { Mespuntoventasuma } from "src/mespuntoventasuma/entities/mespuntoventasuma.entity";
import { Otrossumas } from "src/otrossumas/entities/otrossumas.entity";
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Puntoventaactividad } from "src/puntoventaactividad/entities/puntoventaactividad.entity";
import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";

import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne , OneToMany, OneToOne, UpdateDateColumn} from "typeorm";


@Entity("centralizadormes")
export class Centralizadormes {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradadddd
    idcentralizadormes: string;
    
    @Column()
    fecha:Date;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true,default:0, })
    it:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true})
    iva:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true,default:0, })
    saldoiva:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true,default:0, })
    saldoiue:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true,})
    totalventas:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true})
    totalcompras:number;
    
    @Column()
    estado:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true})
    total:number;

    @Column('decimal', { precision: 10, scale: 2 ,nullable:true})
    totaltodo:number;
    
    @Column('decimal', { precision: 10, scale: 2 ,nullable:true})
    comision:number;
    
    @Column()
    mes:number;
    
    @Column()
    respsuma:number;
    
    @Column()
    respdeclaracion:number;
    
    @Column()
    resplibro:number;
    
    @Column()
    respbancarizacion:number;
    
    @Column()    
    respaprobacion:number;

    @Column()    
    observacion:string;
    @Column()    
    ivaimpuestos:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 2})    
    otros:number;

    @Column({default:0, type: 'numeric', precision: 18, scale: 2})    
    bruto:number;
   
    @Column({default:0, type: 'numeric', precision: 18, scale: 2})    
    excento:number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   

    @Column({type:'uuid'})
    idcentralizador:string;
   
    
    @ManyToOne(() => Centralizador, (centralizador) => centralizador.centralizadormes)
    @JoinColumn({ name: 'idcentralizador' }) 
    centralizador: Centralizador;

   


    
    @OneToOne(() => Comprassumas, comprassumas => comprassumas.centralizadormes, { cascade: true, eager: true })
    comprassumas: Comprassumas;

    @OneToMany(() => Otrossumas, (otrossumas) => otrossumas.centralizadormes)
    @JoinColumn({ name: 'idotrossumas' }) 
    otrossumas: Otrossumas[];


    
   // @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.puntoventaactividad) ///cambie esto
   // ventatalonarios: Ventatalonario;

   @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.centralizadormes)
    ventatalonario: Ventatalonario;

   
   // @OneToMany(() => Mespuntoventasuma, (mespuntoventasuma) => mespuntoventasuma.centralizadormess)
    //@JoinTable()
    //mespuntoventasumas: Mespuntoventasuma[];
    

    


   
}

//function unique(): (target: typeof Centralizadormes) => void | typeof Centralizadormes {
  //  throw new Error("Function not implemented."); nose
//}
