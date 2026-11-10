import { Field, ObjectType } from '@nestjs/graphql';
import { WithId } from './withId.type.js';

@ObjectType('Project')
export class Project extends WithId {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field(() => String, { nullable: true })
  description: string | null;
}
