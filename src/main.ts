import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environments } from './environments/environments';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  app.setGlobalPrefix('api');
  await app.listen(environments.apisPort);
  logger.log(`server running on : http://localhost:${environments.apisPort}`);
}
bootstrap();
