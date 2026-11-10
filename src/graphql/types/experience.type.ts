import {
  Field,
  GraphQLISODateTime,
  HideField,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import { Achievement } from './achievement.type.js';

@ObjectType('Experience')
export class Experience {
  @Field(() => ID)
  id: string;

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
