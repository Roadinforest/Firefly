import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateFireflyDto {
  @ApiProperty({
    description: '萤火虫内容',
    example: '今天天气真好！',
    maxLength: 500,
    type: String,
  })
  @IsString({ message: '内容必须是字符串' })
  @IsNotEmpty({ message: '内容不能为空' })
  @MaxLength(500, { message: '内容长度不能超过500字符' })
  content: string;
} 