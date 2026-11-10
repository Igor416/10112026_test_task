import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  getByProfileId(profileId: string) {
    return this.projectRepository.findByProfileId(profileId);
  }
}
