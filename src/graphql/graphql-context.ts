import type DataLoader from 'dataloader';
import type { Achievement as AchievementRecord } from '../generated/prisma/client.js';

export interface GraphqlContext {
  loaders: {
    achievements: DataLoader<string, AchievementRecord[]>;
  };
}
