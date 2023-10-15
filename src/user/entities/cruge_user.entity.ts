import { Column,Entity,  PrimaryGeneratedColumn} from "typeorm";


@Entity({ name:'cruge_user'})
export class Cruge_user {

   
    @PrimaryGeneratedColumn()  //va estar autogeneradaa
    iduser: number;
    
    @Column({ type: 'bigint' })
    regdate: string ;
    
    @Column({ type: 'bigint', nullable:true })
    actdate:string;
    
    @Column({ type: 'bigint', nullable:true })
    logondate:string;

    @Column({length:64})
    username:string;

    @Column({length:45})
    email:string;

    @Column({length:64})
    password:string;

    @Column({length:100, nullable:true})
    authkey:string;

    @Column({default:0})
    state:number;

    @Column({default:0})
    totalsessioncounter:number;

    @Column({default:0})
    currentsessioncounter:number;
    

}