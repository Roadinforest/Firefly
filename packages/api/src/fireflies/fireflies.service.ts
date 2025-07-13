import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { 
  FireflyResponseDto, 
  FirefliesListResponseDto 
} from './dto';

@Injectable()
export class FirefliesService {
  constructor(private prisma: PrismaService) {}

  async getFireflies(
    page: number = 1, 
    limit: number = 10
  ): Promise<FirefliesListResponseDto> {
    const skip = (page - 1) * limit;
    
    const [fireflies, total] = await Promise.all([
      this.prisma.firefly.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: { email: true }
          }
        }
      }),
      this.prisma.firefly.count()
    ]);

    return {
      fireflies,
      total
    };
  }

  async createFirefly(
    content: string, 
    userId: string
  ): Promise<FireflyResponseDto> {
    // 1. 根据 userId 找到用户所在的 Jar
    let jar = await this.prisma.jar.findFirst({
      where: {
        OR: [
          { user1Id: userId },
          { user2Id: userId }
        ]
      }
    });

    // 如果用户没有 Jar，创建一个单人 Jar
    if (!jar) {
      console.log('User is not part of any jar, creating a single-user jar');
      jar = await this.prisma.jar.create({
        data: {
          user1Id: userId,
          // user2Id 现在是可选的，不设置就是单人 Jar
        }
      });
    }

    // 2. 创建新的萤火虫并关联到 Jar
    const firefly = await this.prisma.firefly.create({
      data: {
        content,
        authorId: userId,
        jarId: jar.id, // 添加 jarId
      },
      include: {
        author: {
          select: { email: true }
        }
      }
    });

    return firefly;
  }
}
