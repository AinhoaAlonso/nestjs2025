import { Module } from '@nestjs/common';;
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './model/Curso';
import { Alumno } from './model/Alumno';
import { MatriculacionService } from './service/matriculacion.service';
import { MatriculacionController } from './controller/matriculacion.controller';
import { Matricula } from './model/Matricula';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // hace que esté disponible en toda la app, para las variable de entorno archivo .env
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          type: 'mysql',
          host: config.get('URL_BD'),
          port: parseInt(config.get('PORT_BD')),
          username: config.get('USERNAME'),
          password: config.get('PASSWORD'),
          database: 'formacion',
          entities: [Curso,Alumno,Matricula],
          synchronize: true, 
        })
      }), 
    TypeOrmModule.forFeature([Curso, Alumno, Matricula])
  ],
  controllers: [MatriculacionController],
  providers: [MatriculacionService],
})
export class AppModule {}

