import { Field, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.type.js';
import { Link } from './link.type.js';
import { Project } from './project.type.js';
import { Skill } from './skill.type.js';
import { WithId } from './withId.type.js';

@ObjectType('Profile', { description: 'Публичная визитка.' })
export class Profile extends WithId {
  @Field({ description: 'Имя, как его показывать на визитке.' })
  name: string;

  @Field({ description: 'Короткий рассказ о себе.' })
  description: string;

  @Field(() => [Link], { description: 'Куда имеет смысл перейти.' })
  links?: Link[];

  @Field(() => [Skill])
  skills?: Skill[];

  @Field(() => [Experience])
  experiences?: Experience[];

  @Field(() => [Project])
  projects?: Project[];
}
