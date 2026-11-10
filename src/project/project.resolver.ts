import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile, Project } from '../graphql/types/index.js';
import { ProjectService } from './project.service.js';

@Resolver(() => Profile)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    return this.projectService.getByProfileId(profile.id);
  }
}
