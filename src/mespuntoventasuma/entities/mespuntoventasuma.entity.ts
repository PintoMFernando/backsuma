
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";

import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne , OneToMany, OneToOne, UpdateDateColumn} from "typeorm";
import { Centralizadormes } from "../../centralizadormes/entities/centralizadormes.entity";
import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";


@Entity("mespuntoventasuma")
export class Mespuntoventasuma {

   
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddddfffffdfsfsdfsdffdghfgh
    idmespuntoventasuma: string;
    
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

    @Column({type:'uuid'})
    idcentralizadormes:string;

    @Column()
    idpuntoventa:number;

    
    @ManyToMany( () => Centralizadormes, (centralizadormes) => centralizadormes.puntoventas)
    @JoinColumn({ name: 'idcentralizadormes' }) 
    centralizadormess: Centralizadormes[];
  
    @ManyToMany( () => Puntoventa, (puntoventa) => puntoventa.centralizadormess)
    @JoinColumn({ name: 'idpuntoventa' }) 
    puntoventas: Puntoventa[];


    @ManyToOne(() => Ventatalonario)
    @JoinColumn({ name: 'idmespuntoventasuma' }) 
    ventatalonario: Ventatalonario;

   // @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.mespuntoventasumas)
   
    //ventatalonarios: Ventatalonario;
    
 
}

