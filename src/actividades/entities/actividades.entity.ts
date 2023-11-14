
import { Puntoventaactividad } from 'src/puntoventaactividad/entities/puntoventaactividad.entity';
import { Entity, Column,CreateDateColumn, UpdateDateColumn, OneToMany, JoinTable } from 'typeorm';

///date UTC
@Entity("actividades")
export class Actividades {
 // @PrimaryGeneratedColumn()  //va estar autogeneradaa
  //idempresa: number;

    @Column({primary: true, generated: true})
    idactividades:number
    @Column({nullable:true,length:200})
    nombre:string
    @Column({length:2})
    seccion:string
    @Column()
    division:number
    @Column()
    grupo:number
  

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

    @OneToMany(() => Puntoventaactividad, (puntoventaactividad) => puntoventaactividad.actividadess) 
    @JoinTable()
    puntoventaactividads: Puntoventaactividad[];


  
   /* @JoinColumn()
    @OneToMany(() => Centralizador, (dato) => dato.empresa)
    centralizador: Centralizador[];*/
    

  
}