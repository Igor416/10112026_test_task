import { Injectable } from '@nestjs/common';
import { LinkRepository } from './link.repository.js';

@Injectable()
export class LinkService {
  constructor(private readonly linkRepository: LinkRepository) {}

  getByProfileId(profileId: string) {
    return this.linkRepository.findByProfileId(profileId);
  }
}
