

import { Actividades } from "src/actividades/entities/actividades.entity";
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";
import { Mespuntoventasuma } from "src/mespuntoventasuma/entities/mespuntoventasuma.entity";
import { Puntoventa } from "src/puntoventa/entities/puntoventa.entity";
import { Ventatalonario } from "src/ventatalonario/entities/ventatalonario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne , OneToMany, UpdateDateColumn} from "typeorm";


@Entity("puntoventaactividad")
export class Puntoventaactividad {

   
    
    @Column({primary:true,type:'uuid'})  //va estar autogeneradaddddfffffdfsfsdfsdfffdgdfgdasdasdassdasd
    idpuntoventaactividad: string;
    
    @Column()
    idactividades:number;

    @Column({type: 'integer'})
    idpuntoventa:number;

    
    
    @Column({default:'true'})
    estado:boolean;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

   

    
    @ManyToOne( () => Actividades, (actividades) => actividades.puntoventaactividads)
    @JoinColumn({ name: 'idactividades' }) 
    actividadess: Actividades[];

    @ManyToOne( () => Puntoventa, (puntoventa) => puntoventa.puntoventaactividads)
    @JoinColumn({ name: 'idpuntoventa' }) 
    puntoventa: Puntoventa[];

   
  



    @ManyToOne(() => Ventatalonario, (ventatalonario) => ventatalonario.puntoventaactividad)
    ventatalonarios: Ventatalonario;


   




  


}