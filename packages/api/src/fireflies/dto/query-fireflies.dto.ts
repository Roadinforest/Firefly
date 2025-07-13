import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryFirefliesDto {
  @ApiProperty({
    description: '页码',
    example: 1,
    type: Number,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: '页码必须是数字' })
  @Min(1, { message: '页码最小为1' })
  page?: number = 1;

  @ApiProperty({
    description: '每页数量',
    example: 10,
    type: Number,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: '每页数量必须是数字' })
  @Min(1, { message: '每页数量最小为1' })
  @Max(100, { message: '每页数量最大为100' })
  limit?: number = 10;
} 