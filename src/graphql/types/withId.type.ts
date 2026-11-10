import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('WithId')
export class WithId {
  @Field(() => ID)
  public id: string;
}
