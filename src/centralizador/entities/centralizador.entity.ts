
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, Unique, UpdateDateColumn} from "typeorm";
import { Empresa } from "src/caso-uso/empresa/entities/empresa.entity";
import { IsNotEmpty } from "class-validator";

@Entity("centralizador")
@Unique(['anio'])
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


}