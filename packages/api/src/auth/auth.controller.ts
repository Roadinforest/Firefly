// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards } from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { 
  RegisterDto, 
  LoginDto, 
  RegisterResponseDto, 
  LoginResponseDto,
  ErrorResponseDto,
  UserDto
} from './dto';

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: '用户注册',
    description: '创建新用户账户'
  })
  @ApiBody({
    type: RegisterDto,
    description: '注册信息'
  })
  @ApiResponse({
    status: 201,
    description: '注册成功',
    type: RegisterResponseDto
  })
  @ApiBadRequestResponse({
    description: '请求参数错误',
    type: ErrorResponseDto
  })
  @ApiConflictResponse({
    description: '邮箱已存在',
    type: ErrorResponseDto
  })
  async register(@Body() registerDto: RegisterDto): Promise<RegisterResponseDto> {
    return this.authService.register(registerDto.email, registerDto.password);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '用户登录',
    description: '用户登录并获取访问令牌'
  })
  @ApiBody({
    type: LoginDto,
    description: '登录信息'
  })
  @ApiResponse({
    status: 200,
    description: '登录成功',
    type: LoginResponseDto
  })
  @ApiBadRequestResponse({
    description: '请求参数错误',
    type: ErrorResponseDto
  })
  @ApiUnauthorizedResponse({
    description: '认证失败',
    type: ErrorResponseDto
  })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '获取用户信息',
    description: '获取当前登录用户的详细信息'
  })
  @ApiResponse({
    status: 200,
    description: '获取成功',
    type: UserDto
  })
  @ApiUnauthorizedResponse({
    description: '未授权访问',
    type: ErrorResponseDto
  })
  getProfile(@CurrentUser() user: UserDto): UserDto {
    return user;
  }
}
