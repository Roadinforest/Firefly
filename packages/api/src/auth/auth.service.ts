// src/auth/auth.service.ts
import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterResponseDto, LoginResponseDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string): Promise<RegisterResponseDto> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // 简化：注册后不直接返回 token，让用户去登录
    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string): Promise<LoginResponseDto> {
    console.log('Login attempt for email:', email);
    
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log('User found:', user ? 'Yes' : 'No');
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    console.log('Password:', password);
    console.log('User password:', user.password);
    console.log('Password match:', isPasswordMatching);
    
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
