import { Field, ObjectType } from '@nestjs/graphql';
import { SkillCategory } from '../../generated/prisma/enums.js';
import { WithId } from './withId.type.js';

@ObjectType('Skill')
export class Skill extends WithId {
  @Field()
  name: string;

  @Field(() => SkillCategory)
  category: SkillCategory;
}
