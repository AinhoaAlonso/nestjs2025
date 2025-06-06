import { Module } from '@nestjs/common';
import { Movimiento } from './model/Movimiento';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosController } from './controller/movimientos.controller';
import { Cuenta } from './model/Cuenta';
import { CuentasController } from './controller/cuentas.controller';
import { CuentasService } from './service/cuentas.service';
import { Cliente } from './model/Cliente';
@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'nestuser', 
      password: 'nestpass', 
      database: 'bancabd', 
      entities: [Movimiento, Cuenta, Cliente], 
      synchronize: false, 
    }),
    TypeOrmModule.forFeature([Movimiento, Cuenta, Cliente])
  ],
  controllers: [MovimientosController, CuentasController],
  providers: [MovimientosService, CuentasService],
})
export class AppModule {}
