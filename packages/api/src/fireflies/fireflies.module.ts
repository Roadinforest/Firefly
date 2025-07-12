import { Module } from '@nestjs/common';
import { FirefliesController } from './fireflies.controller';
import { FirefliesService } from './fireflies.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; 

@Module({
  imports: [PrismaModule, AuthModule], 
  controllers: [FirefliesController],
  providers: [FirefliesService],
})
export class FirefliesModule {}
