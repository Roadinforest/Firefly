import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FirefliesService {
  constructor(private prisma: PrismaService) {}

  async create(content: string, userId: string) {
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
      throw new NotFoundException('User is not part of any jar');
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
      // 临时：返回空数组而不是抛出错误
      return [];
      // throw new NotFoundException('User is not part of any jar');
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
