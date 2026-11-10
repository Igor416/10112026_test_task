import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class LinkRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prismaService.link.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
