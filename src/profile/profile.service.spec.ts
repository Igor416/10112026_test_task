import { NotFoundException } from '@nestjs/common';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProfileRepository } from './profile.repository.js';
import { ProfileService } from './profile.service.js';

describe('ProfileService', () => {
  const findMyProfile = vi.fn();
  const repository = { findMyProfile } as unknown as ProfileRepository;
  let service: ProfileService;

  beforeEach(() => {
    findMyProfile.mockReset();
    service = new ProfileService(repository);
  });

  it('возвращает строку профиля', async () => {
    const row = { id: 'profile-1', name: 'Мария', description: 'Backend' };
    findMyProfile.mockResolvedValue(row);

    await expect(service.getProfile()).resolves.toBe(row);
  });

  it('бросает NotFoundException, если строки нет', async () => {
    findMyProfile.mockResolvedValue(null);

    await expect(service.getProfile()).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
