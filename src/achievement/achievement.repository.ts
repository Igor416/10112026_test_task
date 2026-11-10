import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AchievementRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByExperienceIds(experienceIds: readonly string[]) {
    return this.prismaService.achievement.findMany({
      where: { experienceId: { in: [...experienceIds] } },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
