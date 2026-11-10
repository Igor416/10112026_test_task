import { Injectable } from '@nestjs/common';
import { ExperienceRepository } from './experience.repository.js';

@Injectable()
export class ExperienceService {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  getByProfileId(profileId: string) {
    return this.experienceRepository.findByProfileId(profileId);
  }
}
