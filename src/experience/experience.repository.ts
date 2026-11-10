import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ExperienceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prismaService.experience.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
