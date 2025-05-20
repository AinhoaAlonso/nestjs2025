import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Ficha } from './model/Ficha';

@Controller("saludos")
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get("general")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("personal/:name")
  getHelloPersonal(@Param("name") nombre:string):string{
    return this.appService.getHello() + ": "+ nombre;
  }
  @Get("completo")
  getHelloCompleto(@Query("name") nombre:string, @Query("age") edad:number):string{
    return this.appService.getHello()+" te llamas: "+ nombre+ " y tienes " +edad+ " años."
  }
  @Get("ficha/:name")
  getFicha(@Param("name")nombre:string):Ficha{
    return new Ficha(nombre,23,"aaa@abc.com");
  }
  @Post("alta") //Con el @Body estamos diciendo que los datos vienen en el cuerpo desde el front
  postAltaFicha(@Body() ficha:Ficha):void{
    console.log("Ficha: "+ ficha.nombre+" - "+ficha.edad+" - "+ficha.email);
  }
}
