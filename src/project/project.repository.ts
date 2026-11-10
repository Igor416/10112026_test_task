import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prismaService.project.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
