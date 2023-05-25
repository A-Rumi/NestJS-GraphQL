import { Inject, Injectable } from '@nestjs/common';
import { createPersonInput } from './person.input';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PersonRepository')
    private readonly personRepository: PersonRepository,
  ) {}

  async createPerson(data: any) {
    const pData = JSON.parse(data);
    const result = await this.personRepository.createPerson(pData);

    return result;
  }

  async getPerson(id: number) {
    const result =  await this.personRepository.findOneBy({ id: id });
    console.log("~~~~~~~~~");
    console.log(result);
    return result;
  }

  async getPersons() {
    return await this.personRepository.find();
  }
}
