
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, Unique, UpdateDateColumn} from "typeorm";
import { Empresa } from "src/caso-uso/empresa/entities/empresa.entity";
import { IsNotEmpty } from "class-validator";
import { Centralizadormes } from "src/centralizadormes/entities/centralizadormes.entity";

@Entity("centralizador")

export class Centralizador {

   @Column({primary:true,type:'uuid'})  //va estar autogeneradaaa
     idcentralizador: string;
     
    @IsNotEmpty()
    @Column()
    anio:number;
   
    @IsNotEmpty()
    @Column({ type: 'integer' }) 
    id_empresa: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
    
    
    @ManyToOne(() => Empresa, (empresa) => empresa.idempresa)
    @JoinColumn({ name: 'id_empresa'})
    empresa: Empresa;


    

    @OneToMany(() => Centralizadormes, centralizadormes => centralizadormes.centralizador)
    centralizadormes: Centralizadormes[];



}