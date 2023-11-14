


import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Mespuntoventasuma } from "src/mespuntoventasuma/entities/mespuntoventasuma.entity";
import { Puntoventaactividad } from "src/puntoventaactividad/entities/puntoventaactividad.entity";

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne , OneToMany, UpdateDateColumn} from "typeorm";


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

    @Column({type: 'uuid',nullable:true})
    idcentralizadormes:string;

    @Column({type: 'uuid',nullable:true})
    idpuntoventaactividad:string;
      
   
     
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
   
    
    @DeleteDateColumn()
    deletedAtobs:Date;

   // @Column({type:'uuid'})
    //idmespuntoventasuma:string;

   
   
    
   // @ManyToOne(() => Mespuntoventasuma)
    //@JoinColumn({ name: 'idmespuntoventasuma' }) 
    //mespuntoventa: Mespuntoventasuma;


    //@OneToMany(() => Mespuntoventasuma, (mespuntoventasuma) => mespuntoventasuma.ventatalonarios)
    //@JoinColumn({ name: 'idmespuntoventasuma'})
    //mespuntoventasumas: Mespuntoventasuma[];
    



    @ManyToOne(() => Centralizadormes, (centralizadormes) => centralizadormes.ventatalonarios)
    @JoinColumn({ name: 'idcentralizadormes' }) 
    centralizadormess: Centralizadormes;

    
    
    @ManyToOne( () => Puntoventaactividad, (puntoventaactividad) => puntoventaactividad.ventatalonarios)
    @JoinColumn({ name: 'idpuntoventaactividad' }) 
    puntoventaactividad: Puntoventaactividad[];


}