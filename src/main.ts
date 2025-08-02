import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.use(cookieParser());
   const port=process.env.PORT;
   console.log(port,"server runninng at port")
  await app.listen(port ?? 3000);
}
bootstrap();
