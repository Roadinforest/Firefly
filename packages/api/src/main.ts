import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 创建应用实例
  await app.listen(process.env.PORT ?? 3000); // 启动应用，监听 3000 端口
}

void bootstrap();
