
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
    
    @Column()
    it:number;
    
    @Column()
    iva:number;
    
    @Column()
    saldoiva:number;
    
    @Column()
    saldoiue:number;
    
    @Column()
    totalventas:number;
    
    @Column()
    totalcompras:number;
    
    @Column()
    estado:number;
    
    @Column()
    total:number;
    
    @Column()
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

    @Column({default:0, type: 'numeric', precision: 18, scale: 3})    
    otros:number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   

    @Column({type:'uuid'})
    idcentralizador:string;
   
    
    @ManyToOne(() => Centralizador)
    @JoinColumn({ name: 'idcentralizador' }) 
    centralizador: Centralizador;
    
    @OneToOne(() => Comprassumas, comprassumas => comprassumas.centralizadormes, { cascade: true, eager: true })
    comprassumas: Comprassumas;

    @OneToMany(() => Otrossumas, (otrossumas) => otrossumas.centralizadormes)
    @JoinColumn({ name: 'idotrossumas' }) 
    otrossumas: Otrossumas[];


    
    @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.puntoventaactividad)
   
    ventatalonarios: Ventatalonario;

   
   // @OneToMany(() => Mespuntoventasuma, (mespuntoventasuma) => mespuntoventasuma.centralizadormess)
    //@JoinTable()
    //mespuntoventasumas: Mespuntoventasuma[];
    

    


   
}

//function unique(): (target: typeof Centralizadormes) => void | typeof Centralizadormes {
  //  throw new Error("Function not implemented."); nose
//}
