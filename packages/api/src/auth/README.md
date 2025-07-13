# Auth 模块 API 文档

## 概述

Auth 模块提供了用户认证相关的 API 接口，包括用户注册、登录和获取用户信息等功能。

## API 文档访问

启动应用后，可以通过以下地址访问 Swagger API 文档：

```
http://localhost:3000/api-docs
```

## 接口列表

### 1. 用户注册

**POST** `/api/auth/register`

注册新用户账户。

**请求体：**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应：**
```json
{
  "message": "User registered successfully"
}
```

### 2. 用户登录

**POST** `/api/auth/login`

用户登录并获取访问令牌。

**请求体：**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应：**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. 获取用户信息

**GET** `/api/auth/profile`

获取当前登录用户的详细信息（需要 Bearer Token）。

**请求头：**
```
Authorization: Bearer <your_access_token>
```

**响应：**
```json
{
  "sub": "1",
  "email": "user@example.com"
}
```

## 使用 Swagger UI

1. 启动应用：`pnpm run start:dev`
2. 访问：`http://localhost:3000/api-docs`
3. 在 Swagger UI 中：
   - 可以查看所有 API 接口的详细信息
   - 可以直接在页面上测试 API
   - 对于需要认证的接口，点击右上角的 "Authorize" 按钮输入 Bearer Token

## 验证规则

- **邮箱**：必须是有效的邮箱格式
- **密码**：长度至少为 6 位字符

## 错误处理

所有接口都包含完整的错误响应定义，包括：
- 400 Bad Request：请求参数错误
- 401 Unauthorized：认证失败
- 409 Conflict：邮箱已存在

## 技术栈

- **NestJS**：后端框架
- **Swagger**：API 文档生成
- **class-validator**：请求参数验证
- **JWT**：身份认证
- **bcrypt**：密码加密 