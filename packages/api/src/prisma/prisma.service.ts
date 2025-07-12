// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// 这个服务通常用于：
// 在 NestJS 应用中提供统一的数据库访问接口
// 自动管理数据库连接的生命周期
// 为其他服务提供 Prisma ORM 的功能

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
