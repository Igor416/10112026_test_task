import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AchievementModule } from './achievement/achievement.module.js';
import { configuration } from './config/configuration.js';
import { ExperienceModule } from './experience/experience.module.js';
import { GraphqlModule } from './graphql/graphql.module.js';
import { HealthModule } from './health/health.module.js';
import { LinkModule } from './link/link.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { ProjectModule } from './project/project.module.js';
import { SkillModule } from './skill/skill.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    GraphqlModule,
    HealthModule,
    ProfileModule,
    LinkModule,
    SkillModule,
    ExperienceModule,
    AchievementModule,
    ProjectModule,
  ],
})
export class AppModule {}
