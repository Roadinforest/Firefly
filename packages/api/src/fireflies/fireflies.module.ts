import { Module } from '@nestjs/common';
import { FirefliesController } from './fireflies.controller';
import { FirefliesService } from './fireflies.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; // 导入 AuthModule

@Module({
  imports: [PrismaModule, AuthModule], // 导入 AuthModule 以使用 JwtAuthGuard
  controllers: [FirefliesController],
  providers: [FirefliesService],
})
export class FirefliesModule {}
