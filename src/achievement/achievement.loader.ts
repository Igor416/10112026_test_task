import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import type { Achievement as AchievementRecord } from '../generated/prisma/client.js';
import { AchievementService } from './achievement.service.js';

@Injectable()
export class AchievementLoader {
  constructor(private readonly achievementService: AchievementService) {}

  create() {
    return new DataLoader<string, AchievementRecord[]>((experienceIds) =>
      this.achievementService.getByExperienceIds(experienceIds),
    );
  }
}
