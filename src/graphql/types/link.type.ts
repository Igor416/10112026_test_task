import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LinkType } from '../../generated/prisma/enums.js';

@ObjectType('Link')
export class Link {
  @Field(() => ID)
  id: string;

  @Field(() => LinkType)
  type: LinkType;

  @Field()
  label: string;

  @Field()
  url: string;
}
