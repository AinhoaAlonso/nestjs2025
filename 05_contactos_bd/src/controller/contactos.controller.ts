import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ContactosService } from 'src/Service/contactos.service';
import { Contacto } from 'src/model/Contacto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post("alta")
  create(@Body() contacto: Contacto) {
    return this.contactosService.save(contacto);
  }

  @Get("todos")
  findAll() {
    return this.contactosService.findAll();
  }

  @Get('buscar/:name')
  findOne(@Param('name') nombre: string) {
    return this.contactosService.findByNombre(nombre);
  }

  @Delete('eliminar/:email')
  remove(@Param('email') email: string) {
    return this.contactosService.deleteByEmail(email);
  }
}
