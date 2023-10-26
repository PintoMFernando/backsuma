
import { IsNotEmpty } from 'class-validator';
import { Empresa } from 'src/caso-uso/empresa/entities/empresa.entity';
import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

///date UTC
@Entity("empresadatosiniciales")
export class Empresadatosiniciales {
 // @PrimaryGeneratedColumn()  //va estar autogeneradaa
  //idempresa: number;

  @Column({primary:true,type:'uuid'})  
  idempresadatosiniciales: string;
    
    @Column({default:0, nullable: true}) 
    balance:number
   
    @Column({default:0, nullable: true})
    total:number
   
    @Column({default:0, nullable: true})
    trabajo:number
    
    @Column({default:false, nullable: true})
    planillas:boolean
  
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