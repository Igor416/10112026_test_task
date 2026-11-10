import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileRepository } from './profile.repository.js';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile() {
    const profile = await this.profileRepository.findMyProfile();
    if (!profile) {
      throw new NotFoundException(
        'Профиль main не найден. Сидер не отработал или база пустая.',
      );
    }
    return profile;
  }
}
