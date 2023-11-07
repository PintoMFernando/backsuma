

import { Actividades } from "src/actividades/entities/actividades.entity";
import { Mespuntoventasuma } from "src/mespuntoventasuma/entities/mespuntoventasuma.entity";
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne , OneToMany, UpdateDateColumn} from "typeorm";


@Entity("puntoventaactividad")
export class Puntoventaactividad {

   
    
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddddfffffdfsfsdfsdfffdgdfgdasdasdassdasd
    idpuntoventaactividad: string;
    
    @Column({type:'uuid'})
    idactividades:string;

    @Column({type: 'integer'})
    idpuntoventa:number;
    
    
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

   

    
    @ManyToOne( () => Actividades, (actividades) => actividades.puntoventaactividads)
    @JoinColumn({ name: 'idactividades' }) 
    //@JoinTable({ name: 'mespuntoventasuma', joinColumn: { name: 'idcentralizadormes' }, inverseJoinColumn: { name: 'idpuntoventa' } })
    actividadess: Actividades[];

    @ManyToOne( () => Puntoventa, (puntoventa) => puntoventa.puntoventaactividads)
    @JoinColumn({ name: 'idpuntoventa' }) 
    //@JoinTable({ name: 'mespuntoventasuma', joinColumn: { name: 'idpuntoventa' }, inverseJoinColumn: { name: 'idcentralizadormes' } })
    puntoventas: Puntoventa[];




    @OneToMany(() => Mespuntoventasuma, (mespuntoventasuma) => mespuntoventasuma.puntoventaactividad)
    @JoinTable()
    mespuntoventasumas: Mespuntoventasuma[];





  
   // @ManyToOne( () => Puntoventa, (puntoventa) => puntoventa.mespuntoventasumas)  //esto borrar
    //@JoinColumn({ name: 'idpuntoventa' }) 
    //@JoinTable({ name: 'mespuntoventasuma', joinColumn: { name: 'idpuntoventa' }, inverseJoinColumn: { name: 'idcentralizadormes' } })
    //puntoventa: Puntoventa[];


    //@ManyToOne(() => Ventatalonario)
    //ventatalonario: Ventatalonario;


}