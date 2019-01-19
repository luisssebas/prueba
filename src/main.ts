import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useStaticAssets(__dirname + '/public');
  app.setBaseViewsDir(__dirname + '/views');
  app.setViewEngine('hbs');
}
bootstrap();
