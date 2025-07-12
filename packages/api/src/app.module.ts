import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FirefliesModule } from './fireflies/fireflies.module';

@Module({
  imports: [PrismaModule, AuthModule, FirefliesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
