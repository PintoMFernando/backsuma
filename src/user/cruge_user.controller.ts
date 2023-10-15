import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './cruge_user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Get('/:iduser')
    findByIdUser(@Param('iduser') iduser: number) {
       return   this.userService.findByIdUser(iduser);
    }
 
   /* @Get('/:iduser')
   findAllByIdUser(@Param('iduser') iduser: number) {
      return   this.userService.findAllByIdUser(iduser);
   }
*/
}
