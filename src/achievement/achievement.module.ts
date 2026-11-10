import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { AchievementLoader } from './achievement.loader.js';
import { AchievementRepository } from './achievement.repository.js';
import { AchievementResolver } from './achievement.resolver.js';
import { AchievementService } from './achievement.service.js';

@Module({
  imports: [PrismaModule],
  providers: [
    AchievementRepository,
    AchievementService,
    AchievementLoader,
    AchievementResolver,
  ],
  exports: [AchievementLoader],
})
export class AchievementModule {}
