import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './Middleware/middle.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API - FT50')
  .setDescription('M4-Backend E-COMMERCE')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  
  app.use(loggerMiddleware)
  app.useGlobalPipes(new ValidationPipe);
  await app.listen(PORT);
}
bootstrap();
