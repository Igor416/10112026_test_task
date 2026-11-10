import { Field, ObjectType } from '@nestjs/graphql';
import { LinkType } from '../../generated/prisma/enums.js';
import { WithId } from './withId.type.js';

@ObjectType('Link')
export class Link extends WithId {
  @Field(() => LinkType)
  type: LinkType;

  @Field()
  label: string;

  @Field()
  url: string;
}
