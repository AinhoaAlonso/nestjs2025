import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/dtos/LoginDto';


@Injectable()
export class UsersService {
  constructor(){}

  async findByUserName(username:string): Promise<LoginDto>{
    return this.users.find(user => user.username == username);
  }
}
