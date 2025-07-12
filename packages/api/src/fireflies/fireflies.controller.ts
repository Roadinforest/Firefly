import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { FirefliesService } from './fireflies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: {
    sub: string;
    email: string;
  };
}

@Controller('fireflies')
@UseGuards(JwtAuthGuard) // 保护所有路由
export class FirefliesController {
  constructor(private readonly firefliesService: FirefliesService) {}

  @Post()
  async create(@Body() body: { content: string }, @Request() req: RequestWithUser) {
    console.log(req.user);
    const userId = req.user.sub; // 从 JWT 中获取用户 ID
    console.log(req.user);
    return this.firefliesService.create(body.content, userId);
  }

  @Get()
  async findAll(@Request() req: RequestWithUser) {
    const userId = req.user.sub; // 从 JWT 中获取用户 ID
    return this.firefliesService.findAll(userId);
  }
}
