import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SkillRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prismaService.skill.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
