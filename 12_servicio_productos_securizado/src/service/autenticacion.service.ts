import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AutenticacionService {
  constructor(private usersService: UsersService, private jwtService: JwtService ) {}
  //autentica al usuario. Es decir, comprueba que es un usuario válido
   async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUserName(username);
    const valid:boolean=password.trim()==user.password;
    console.log(valid);
    //si el usuario es correcto, devolvemos un Json cons sus propiedades, menos la contraseña
    if (user && valid) {
    const { password, ...result } = user;
    return result;
    }
    return null;
  } 
  //genera el token a partir de los datos del usuario
  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
    access_token: this.jwtService.sign(payload),
    };
  } 


}
