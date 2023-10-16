

import { IsNotEmpty } from "class-validator";
import { Empresa } from "src/caso-uso/empresa/entities/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";


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
    

    @IsNotEmpty()
    @Column({ type: 'integer' }) 
    idempresa: number;

   
    @ManyToOne(() => Empresa, (empresa) => empresa.idempresa)
    @JoinColumn({ name: 'id_empresa'})
    empresa: Empresa;


}