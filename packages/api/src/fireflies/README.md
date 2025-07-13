# Fireflies 模块 API 文档

## 概述

Fireflies 模块提供了萤火虫相关的 API 接口，包括创建萤火虫和获取萤火虫列表等功能。

## API 文档访问

启动应用后，可以通过以下地址访问 Swagger API 文档：

```
http://localhost:3000/api-docs
```

## 接口列表

### 1. 获取萤火虫列表

**GET** `/api/fireflies`

获取所有萤火虫的列表，支持分页。

**查询参数：**
- `page` (可选): 页码，默认为 1
- `limit` (可选): 每页数量，默认为 10

**响应：**
```json
{
  "fireflies": [
    {
      "id": "1",
      "content": "今天天气真好！",
      "author": {
        "email": "user@example.com"
      },
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 10
}
```

### 2. 创建萤火虫

**POST** `/api/fireflies`

创建新的萤火虫（需要 Bearer Token）。

**请求头：**
```
Authorization: Bearer <your_access_token>
```

**请求体：**
```json
{
  "content": "今天天气真好！"
}
```

**响应：**
```json
{
  "id": "1",
  "content": "今天天气真好！",
  "author": {
    "email": "user@example.com"
  },
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 验证规则

- **content**: 不能为空，最大长度 500 字符
- **page**: 最小值为 1
- **limit**: 最小值为 1，最大值为 100

## 错误处理

所有接口都包含完整的错误响应定义，包括：
- 400 Bad Request：请求参数错误
- 401 Unauthorized：未授权访问

## 技术栈

- **NestJS**：后端框架
- **Swagger**：API 文档生成
- **class-validator**：请求参数验证
- **Prisma**：数据库操作
```

## 6. 更新 FirefliesModule

```typescript:packages/api/src/fireflies/fireflies.module.ts
import { Module } from '@nestjs/common';
import { FirefliesController } from './fireflies.controller';
import { FirefliesService } from './fireflies.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FirefliesController],
  providers: [FirefliesService],
  exports: [FirefliesService],
})
export class FirefliesModule {}
```

## 总结

现在 fireflies 模块已经按照 auth 模块的要求进行了重构，包括：

✅ **DTO 文件结构**：
- `CreateFireflyDto`：创建萤火虫的请求参数
- `FireflyResponseDto`：萤火虫响应格式
- `QueryFirefliesDto`：查询参数
- `FirefliesListResponseDto`：列表响应格式

✅ **Swagger 装饰器**：
- `@ApiTags('萤火虫')`：API 分组
- `@ApiOperation()`：接口描述
- `@ApiResponse()`：成功响应
- `@ApiBearerAuth()`：Bearer Token 认证

✅ **验证规则**：
- 内容长度限制
- 