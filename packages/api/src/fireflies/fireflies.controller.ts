import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Query, 
  UseGuards,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody,
  ApiQuery,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth
} from '@nestjs/swagger';
import { FirefliesService } from './fireflies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserDto } from '../auth/dto';
import { 
  CreateFireflyDto, 
  FireflyResponseDto, 
  FirefliesListResponseDto,
  QueryFirefliesDto 
} from './dto';

@ApiTags('萤火虫')
@Controller('fireflies')
export class FirefliesController {
  constructor(private firefliesService: FirefliesService) {}

  @Get()
  @ApiOperation({
    summary: '获取萤火虫列表',
    description: '分页获取所有萤火虫'
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: '页码，默认为1'
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: '每页数量，默认为10'
  })
  @ApiResponse({
    status: 200,
    description: '获取成功',
    type: FirefliesListResponseDto
  })
  @ApiBadRequestResponse({
    description: '请求参数错误'
  })
  async getFireflies(@Query() query: QueryFirefliesDto): Promise<FirefliesListResponseDto> {
    return this.firefliesService.getFireflies(query.page, query.limit);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: '创建萤火虫',
    description: '创建新的萤火虫（需要登录）'
  })
  @ApiBody({
    type: CreateFireflyDto,
    description: '萤火虫内容'
  })
  @ApiResponse({
    status: 201,
    description: '创建成功',
    type: FireflyResponseDto
  })
  @ApiBadRequestResponse({
    description: '请求参数错误'
  })
  @ApiUnauthorizedResponse({
    description: '未授权访问'
  })
  async createFirefly(
    @Body() createFireflyDto: CreateFireflyDto,
    @CurrentUser() user: UserDto
  ): Promise<FireflyResponseDto> {
    return this.firefliesService.createFirefly(createFireflyDto.content, user.sub);
  }
}
