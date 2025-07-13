import { ApiProperty } from '@nestjs/swagger';

export class FireflyResponseDto {
  @ApiProperty({
    description: '萤火虫ID',
    example: '1',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: '萤火虫内容',
    example: '今天天气真好！',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: '作者信息',
    example: { email: 'user@example.com' },
    type: Object,
    required: false,
  })
  author?: {
    email: string;
  };

  @ApiProperty({
    description: '创建时间',
    example: '2024-01-01T00:00:00.000Z',
    type: Date, // 改为 Date 类型
    required: false,
  })
  createdAt?: Date; // 改为 Date 类型

  @ApiProperty({
    description: '更新时间',
    example: '2024-01-01T00:00:00.000Z',
    type: Date, // 改为 Date 类型
    required: false,
  })
  updatedAt?: Date; // 改为 Date 类型
}

export class FirefliesListResponseDto {
  @ApiProperty({
    description: '萤火虫列表',
    type: [FireflyResponseDto],
  })
  fireflies: FireflyResponseDto[];

  @ApiProperty({
    description: '总数',
    example: 10,
    type: Number,
  })
  total: number;
} 