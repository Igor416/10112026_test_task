import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Achievement', {
  description: 'Одно достижение внутри места работы.',
})
export class Achievement {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;
}
