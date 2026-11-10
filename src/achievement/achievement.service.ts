import { Injectable } from '@nestjs/common';
import { AchievementRepository } from './achievement.repository.js';
import { groupByParent } from './group-by-parent.js';

@Injectable()
export class AchievementService {
  constructor(private readonly achievementRepository: AchievementRepository) {}

  async getByExperienceIds(experienceIds: readonly string[]) {
    const rows =
      await this.achievementRepository.findByExperienceIds(experienceIds);
    return groupByParent(experienceIds, rows, (row) => row.experienceId);
  }
}
