import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {
  private readonly users = [ 
    { id: 1, username: 'admin', password: 'admin', role: 'admin' }, 
    { id: 2, username: 'usuario', password: 'usuario', role: 'user' }, 
    { id: 2, username: 'usuario1', password: 'usuario1', role: 'user' }
  ]; 

  async findByUserName(username:string): Promise<any>{
    return this.users.find(user => user.username == username);
  }
}
