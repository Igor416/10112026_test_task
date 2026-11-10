import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { SkillRepository } from './skill.repository.js';
import { SkillResolver } from './skill.resolver.js';
import { SkillService } from './skill.service.js';

@Module({
  imports: [PrismaModule],
  providers: [SkillRepository, SkillService, SkillResolver],
})
export class SkillModule {}
