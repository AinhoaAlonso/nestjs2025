import { Module } from '@nestjs/common';
import { CursosController } from './controller/cursos.controller';
import { CursosService } from './service/cursos.service';
import { AlumnosService } from './service/alumnos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './model/Curso';
import { Alumno } from './model/Alumno';


@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'nestuser', 
      password: 'nestpass', 
      database: 'formacion', 
      entities: [Curso, Alumno], 
      synchronize: false, 
    }),
    TypeOrmModule.forFeature([Curso, Alumno])
  ],
  controllers: [CursosController],
  providers: [CursosService, AlumnosService],
})
export class AppModule {}
