import {
  Field,
  GraphQLISODateTime,
  HideField,
  ObjectType,
} from '@nestjs/graphql';
import { Achievement } from './achievement.type.js';
import { WithId } from './withId.type.js';

@ObjectType('Experience')
export class Experience extends WithId {
  @HideField()
  profileId: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endDate: Date | null;

  @Field(() => [Achievement])
  achievements?: Achievement[];

  @Field({
    description: 'Период в виде строки. Считается из дат, в базе не хранится.',
  })
  period?: string;
}
