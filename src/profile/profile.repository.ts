import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  findMyProfile() {
    const slug = this.configService.getOrThrow<string>('profileSlug');

    return this.prismaService.profile.findUnique({
      where: { slug },
    });
  }
}
