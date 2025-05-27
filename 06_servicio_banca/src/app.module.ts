import { Module } from '@nestjs/common';
import { Movimiento } from './model/Movimiento';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosController } from './controller/movimientos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'nestuser', 
      password: 'nestpass', 
      database: 'bancabd', 
      entities: [Movimiento], 
      synchronize: false, 
    }),
    TypeOrmModule.forFeature([Movimiento])
  ],
  controllers: [MovimientosController],
  providers: [MovimientosService],
})
export class AppModule {}
