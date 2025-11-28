import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const express = require('express');


async function bootstrap() {
  


  
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',   // your React app
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  



  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Communication App API')
    .setDescription('Users / Chat / Upload / Share APIs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // serve uploads folder
  app.use('/uploads', express.static('uploads'));

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
  console.log('Swagger UI available at http://localhost:3000/api');
}
bootstrap();