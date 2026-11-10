import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from '../graphql/types/index.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, {
    name: 'profile',
    description: 'Визитка. Сейчас это всегда один основной профиль.',
  })
  profile() {
    return this.profileService.getProfile();
  }
}
