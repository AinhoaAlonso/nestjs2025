import { Module } from '@nestjs/common';
import { PedidosProductosController } from './controller/pedidos-productos.controller';
import { PedidosService } from './service/pedidos.service';
import { ProductosService } from './service/productos.service';
import { Pedido } from './model/Pedido';
import { Producto } from './model/Producto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AutenticacionController } from './controller/autenticacion.controller';
import { AutenticacionService } from './service/autenticacion.service';
import { UsersService } from './service/users.service';
import { JwtStrategy } from './security/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'nestuser', 
      password: 'nestpass', 
      database: 'tiendavirtual', 
      entities: [Pedido, Producto], 
      synchronize: false, 
    }),
    PassportModule,
    JwtModule.register({ 
      secret: 'mysecret', 
      signOptions: { expiresIn: '1h' }, 
    }),
    TypeOrmModule.forFeature([Pedido, Producto])
  ],
  controllers: [PedidosProductosController, AutenticacionController],
  providers: [PedidosService, ProductosService, AutenticacionService, UsersService, JwtStrategy],
})
export class AppModule {}
