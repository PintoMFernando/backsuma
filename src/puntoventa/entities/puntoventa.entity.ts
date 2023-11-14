

import { IsNotEmpty } from "class-validator";
import { Empresa } from "src/caso-uso/empresa/entities/empresa.entity";
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Mespuntoventasuma } from "src/mespuntoventasuma/entities/mespuntoventasuma.entity";
import { Puntoventaactividad } from "src/puntoventaactividad/entities/puntoventaactividad.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";


@Entity("puntoventa")
export class Puntoventa {

   
    @Column({primary: true, generated: true})
    idpuntoventa:number
    
    @Column({length:45})
    direccion_suc:string;

    @Column()
    num_sucursall:number;
    
    @Column({length:55})
    nombre:string;

    @Column()
    idempresa:number;



    @OneToMany(() => Puntoventaactividad, (puntoventaactividad) => puntoventaactividad.puntoventa)
    @JoinTable()
    puntoventaactividads: Puntoventaactividad[];
  

   
    
    @ManyToOne(() => Empresa, (empresa) => empresa.idempresa)
    @JoinColumn({ name: 'idempresa'})
    empresa: Empresa;


}