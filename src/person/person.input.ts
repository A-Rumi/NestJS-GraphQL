import { ArgsType, Field, InputType } from '@nestjs/graphql';

// @InputType(), @ArgsType() 차이
// 요청시 InputType -> 객체, ArgsType -> 각 객체

@InputType()
export class createPersonInput {
  @Field()
  readonly name: string;

  @Field()
  readonly age: number;

  @Field()
  readonly address: string;

  @Field()
  readonly email: string;
}
