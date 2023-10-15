import { Module } from '@nestjs/common';
import { Cruge_user } from './entities/cruge_user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './cruge_user.service';
import { UserController } from './cruge_user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cruge_user])],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
