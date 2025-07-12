import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FirefliesService {
  constructor(private prisma: PrismaService) {}

  async create(content: string, userId: string) {
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
        jarId: jar.id,
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
          }
        }
      }
    });

    return firefly;
  }

  async findAll(userId: string) {
    // 1. 根据 userId 找到用户所在的 Jar
    const jar = await this.prisma.jar.findFirst({
      where: {
        OR: [
          { user1Id: userId },
          { user2Id: userId }
        ]
      }
    });

    if (!jar) {
      // 如果用户没有 Jar，返回空数组
      return [];
    }

    // 2. 返回这个 Jar 下的所有萤火虫
    const fireflies = await this.prisma.firefly.findMany({
      where: {
        jarId: jar.id
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return fireflies;
  }
}
