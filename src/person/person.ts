import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly age: number;

  @Field()
  readonly address: string;

  @Field()
  readonly email: string;
}
