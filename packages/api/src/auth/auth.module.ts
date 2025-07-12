// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true, // 关键！让 JWT 服务在整个应用中可用
      secret: 'YOUR_SUPER_SECRET_KEY', // 重要：把它放到 .env 文件中！
      signOptions: { expiresIn: '1d' }, // token 有效期
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard], // 添加 JwtAuthGuard
  exports: [JwtAuthGuard], // 导出守卫供其他模块使用
})
export class AuthModule {}
