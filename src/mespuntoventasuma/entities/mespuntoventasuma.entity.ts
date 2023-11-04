
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";

import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne , OneToMany, OneToOne, UpdateDateColumn} from "typeorm";
import { Centralizadormes } from "../../centralizadormes/entities/centralizadormes.entity";
import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";


@Entity("mespuntoventasuma")
export class Mespuntoventasuma {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddddfffffdfsfsdfsdffdghfghadasdasdas
    idmespuntoventasuma: string;
    
    @Column({type:'uuid'})
    idcentralizadormes:string;

    @Column({type: 'integer'})
    idpuntoventa:number;
    
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

   

    
    @ManyToOne( () => Centralizadormes, (centralizadormes) => centralizadormes.mespuntoventasumas)
    @JoinColumn({ name: 'idcentralizadormes' }) 
    //@JoinTable({ name: 'mespuntoventasuma', joinColumn: { name: 'idcentralizadormes' }, inverseJoinColumn: { name: 'idpuntoventa' } })
    centralizadormess: Centralizadormes[];
  
    @ManyToOne( () => Puntoventa, (puntoventa) => puntoventa.mespuntoventasumas)
    @JoinColumn({ name: 'idpuntoventa' }) 
    //@JoinTable({ name: 'mespuntoventasuma', joinColumn: { name: 'idpuntoventa' }, inverseJoinColumn: { name: 'idcentralizadormes' } })
    puntoventa: Puntoventa[];


    @ManyToOne(() => Ventatalonario)
    ventatalonario: Ventatalonario;

   // @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.mespuntoventasumas)
   
    //ventatalonarios: Ventatalonario;
    
 
}

