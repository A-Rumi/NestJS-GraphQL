import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './person';
import { createPersonInput } from './person.input';

@Resolver(Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => Person)
  async getPerson(@Args('id', { type: () => Int }) id: number) {
    return await this.personService.getPerson(id);
  }

  @Query(() => [Person])
  async getPersons() {
    return await this.personService.getPersons();
  }

  @Mutation(() => Person)
  async createPerson(@Args('data') data: createPersonInput) {
    const inputData = JSON.stringify(data);
    return await this.personService.createPerson(inputData);
  }
}
