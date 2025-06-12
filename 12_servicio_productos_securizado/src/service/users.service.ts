import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dtos/LoginDto';
import { User } from 'src/model/User';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}

  async findByUserName(username:string): Promise<LoginDto>{
    return this.userRepository.findOneBy({username:username});
  }
}
