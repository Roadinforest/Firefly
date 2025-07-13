
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // 1. 导入 Swagger 模块

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 自动移除未定义的属性
    forbidNonWhitelisted: true, // 禁止未定义的属性
    transform: true, // 自动转换类型
    disableErrorMessages: false, // 确保错误消息可见
  }));

  // 1. 先设置全局前缀
  app.setGlobalPrefix('api');

  // 2. 然后配置 Swagger 文档
  const config = new DocumentBuilder()
    .setTitle('Firefly API') // 文档标题
    .setDescription('The official API documentation for the Firefly application.') // 文档描述
    .setVersion('1.0') // API 版本
    .addBearerAuth() // 关键！启用 Bearer Token 认证，这样在 Swagger UI 上可以输入 JWT 进行调试
    .build();

  // 3. 创建 Swagger 文档对象
  const document = SwaggerModule.createDocument(app, config);
  
  // 4. 设置 Swagger UI 的访问路径
  // 例如，当你访问 http://localhost:3000/api-docs 时，就能看到一个交互式的 API 文档页面
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();