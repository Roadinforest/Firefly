import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '用户邮箱地址',
    example: 'user@example.com',
    type: String,
  })
  @IsEmail({}, { message: '请输入有效的邮箱地址' })
  email: string;

  @ApiProperty({
    description: '用户密码',
    example: 'password123',
    minLength: 6,
    type: String,
  })
  @IsString({ message: '密码必须是字符串' })
  @MinLength(3, { message: '密码长度至少为3位' })
  password: string;
} 