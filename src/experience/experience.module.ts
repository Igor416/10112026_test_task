import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ExperienceRepository } from './experience.repository.js';
import {
  ExperiencePeriodResolver,
  ExperienceResolver,
} from './experience.resolver.js';
import { ExperienceService } from './experience.service.js';

@Module({
  imports: [PrismaModule],
  providers: [
    ExperienceRepository,
    ExperienceService,
    ExperienceResolver,
    ExperiencePeriodResolver,
  ],
})
export class ExperienceModule {}
