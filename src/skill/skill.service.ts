import { Injectable } from '@nestjs/common';
import { SkillRepository } from './skill.repository.js';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillRepository) {}

  getByProfileId(profileId: string) {
    return this.skillRepository.findByProfileId(profileId);
  }
}
