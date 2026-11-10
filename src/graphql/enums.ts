import { registerEnumType } from '@nestjs/graphql';
import { LinkType, SkillCategory } from '../generated/prisma/enums.js';

export const graphqlEnums = [
  {
    ref: LinkType,
    name: 'LinkType',
    description: 'Куда ведёт ссылка с визитки.',
  },
  {
    ref: SkillCategory,
    name: 'SkillCategory',
    description: 'Группа навыка на визитке.',
  },
] as const;

export function registerEnums() {
  for (const item of graphqlEnums) {
    registerEnumType(item.ref, {
      name: item.name,
      description: item.description,
    });
  }
}
