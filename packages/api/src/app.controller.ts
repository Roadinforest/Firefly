import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get('ping')
  ping(): { message: string } {
    return { message: 'pong' };
  }
}
