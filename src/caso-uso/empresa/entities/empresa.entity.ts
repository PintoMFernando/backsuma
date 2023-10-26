
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

///date UTC
@Entity("empresa")
export class Empresa {
 // @PrimaryGeneratedColumn()  //va estar autogeneradaa
  //idempresa: number;

    @Column({primary: true, generated: true})
    idempresa:number
    @Column({nullable:true,length:200})
    razonsocial!:string
    @Column({type:'bigint', nullable:true})
    nit:number
    @Column({default:0,type:'bigint'})
    num_empresa:number
    @Column({default:0,type:'integer'})
    ter_cliente:number
    @Column({nullable:true,length:45})
    mescierre:string
    @Column({default:'12',length:45})
    direccionfiscal:string
    @Column({default:0,type:'bigint'})
    telefonofiscal:number
    @Column({default:0,type:'integer'})
    idresponsable:number
    @Column({nullable:true,length:500})
    actividad:string
    @Column({nullable:true,length:45})
    usuario_ofv:string
    @Column({nullable:true,length:45})
    pass_ofv:string
    @Column({nullable:true,length:45})
    tarjeta_galileo:string
    @Column({nullable:true,length:45})
    pin_galileo:string
    @Column({nullable:true,length:100})
    database:string
    @Column({default:0, type: 'numeric', precision: 18, scale: 3, nullable: true})
    comision:number;
    @Column({default:0, type:'integer'})
    estado:number 
    @Column({nullable:true,length:200})
    obs: string
    
   

   /* @JoinColumn()
    @OneToMany(() => Centralizador, (dato) => dato.empresa)
    centralizador: Centralizador[];*/
    

  
}