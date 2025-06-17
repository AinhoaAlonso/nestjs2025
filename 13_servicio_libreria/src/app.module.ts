import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/Cliente';
import { Libro } from './entities/Libro';
import { Venta } from './entities/Venta';
import { LibreriaController } from './controller/libreria.controller';
import { ClientesService } from './service/clientes.service';
import { LibrosService } from './service/libros.service';
import { ComprasService } from './service/compras.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nestuser',
    password: 'nestpass',
    database:'libros',
    entities: [Cliente, Libro, Venta], // Tablas de la base de datos 
    synchronize: false,
  }),
    
  TypeOrmModule.forFeature([Cliente, Libro, Venta])],
  controllers: [ LibreriaController],
  providers: [ClientesService, LibrosService,ComprasService ],
}) 
export class AppModule {}
