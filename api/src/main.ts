import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;

  app.setGlobalPrefix('api'); // localhost:PORT/api....

  await app.listen(PORT).then(process => console.log(`Started at port ${PORT}`));
}
bootstrap();
