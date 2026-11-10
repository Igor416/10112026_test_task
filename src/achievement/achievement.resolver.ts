import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { GraphqlContext } from '../graphql/graphql-context.js';
import { Achievement, Experience } from '../graphql/types/index.js';

@Resolver(() => Experience)
export class AchievementResolver {
  @ResolveField(() => [Achievement])
  achievements(
    @Parent() experience: Experience,
    @Context() context: GraphqlContext,
  ) {
    return context.loaders.achievements.load(experience.id);
  }
}
