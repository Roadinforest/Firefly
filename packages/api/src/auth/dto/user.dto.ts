import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: '用户ID',
    example: '1',
    type: String,
  })
  sub: string;

  @ApiProperty({
    description: '用户邮箱',
    example: 'user@example.com',
    type: String,
  })
  email: string;
} 