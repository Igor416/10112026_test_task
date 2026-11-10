import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProjectRepository } from './project.repository.js';
import { ProjectResolver } from './project.resolver.js';
import { ProjectService } from './project.service.js';

@Module({
  imports: [PrismaModule],
  providers: [ProjectRepository, ProjectService, ProjectResolver],
})
export class ProjectModule {}
