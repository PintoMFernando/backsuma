import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cruge_user } from './entities/cruge_user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Cruge_user)
        private readonly userRepository: Repository<Cruge_user>
      ) {}

          async findByIdUser(iduser:number){
            //return idempresa;
          return await this.userRepository.findOneBy({iduser});
        
          }

          


          
}
