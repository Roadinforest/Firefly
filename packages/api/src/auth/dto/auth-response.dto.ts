import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({
    description: '响应消息',
    example: 'User registered successfully',
    type: String,
  })
  message: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: '访问令牌',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    type: String,
  })
  access_token: string;
}

export class ErrorResponseDto {
  @ApiProperty({
    description: '错误状态码',
    example: 400,
    type: Number,
  })
  statusCode: number;

  @ApiProperty({
    description: '错误消息',
    example: 'Bad Request',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: '错误类型',
    example: 'Bad Request',
    type: String,
  })
  error: string;
} 