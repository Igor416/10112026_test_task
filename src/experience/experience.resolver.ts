import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Experience, Profile } from '../graphql/types/index.js';
import { ExperienceService } from './experience.service.js';
import { formatPeriod } from './period.js';

@Resolver(() => Profile)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @ResolveField(() => [Experience])
  experiences(@Parent() profile: Profile) {
    return this.experienceService.getByProfileId(profile.id);
  }
}

@Resolver(() => Experience)
export class ExperiencePeriodResolver {
  @ResolveField(() => String, { name: 'period' })
  period(@Parent() experience: Experience): string {
    return formatPeriod(experience.startDate, experience.endDate);
  }
}
