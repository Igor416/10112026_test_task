import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { LinkRepository } from './link.repository.js';
import { LinkResolver } from './link.resolver.js';
import { LinkService } from './link.service.js';

@Module({
  imports: [PrismaModule],
  providers: [LinkRepository, LinkService, LinkResolver],
})
export class LinkModule {}
