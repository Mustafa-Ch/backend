// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  console.log('Bootstrap start memory (MB):', process.memoryUsage().heapUsed / 1024 / 1024);
  const app = await NestFactory.create(AppModule);
  console.log('After AppModule memory (MB):', process.memoryUsage().heapUsed / 1024 / 1024);
  app.use(cookieParser());
  console.log('After middleware memory (MB):', process.memoryUsage().heapUsed / 1024 / 1024);
  await app.listen(process.env.PORT ?? 3000);
  console.log('After listen memory (MB):', process.memoryUsage().heapUsed / 1024 / 1024);
}
bootstrap();
