import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SkillCategory } from '../../generated/prisma/enums.js';

@ObjectType('Skill')
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => SkillCategory)
  category: SkillCategory;
}
