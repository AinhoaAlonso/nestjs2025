import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  //Configuracion swagger
  const config = new DocumentBuilder() 
    .setTitle('API de paises') 
    .setDescription('Documentación de la API de paises') 
    .setVersion('1.0') 
    .addTag('paises') 
    .build(); 
 
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('ayuda/api', app, document);
  
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
