import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile, Skill } from '../graphql/types/index.js';
import { SkillService } from './skill.service.js';

@Resolver(() => Profile)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    return this.skillService.getByProfileId(profile.id);
  }
}
