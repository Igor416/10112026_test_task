import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Link, Profile } from '../graphql/types/index.js';
import { LinkService } from './link.service.js';

@Resolver(() => Profile)
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}

  @ResolveField(() => [Link])
  links(@Parent() profile: Profile) {
    return this.linkService.getByProfileId(profile.id);
  }
}
