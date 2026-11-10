import { Field, ObjectType } from '@nestjs/graphql';
import { WithId } from './withId.type.js';

@ObjectType('Achievement', {
  description: 'Одно достижение внутри места работы.',
})
export class Achievement extends WithId {
  @Field()
  text: string;
}
