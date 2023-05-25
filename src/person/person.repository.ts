import { Person } from './person.entity';
import { DataSource, Repository } from 'typeorm';
import { createPersonInput } from './person.input';

export interface PersonRepository extends Repository<Person> {
  createPerson(data: any): Promise<Person>;
}

export const PersonRepositoryFactory = (dataSource: DataSource) =>
  dataSource.getRepository(Person).extend({
    createPerson(data: any) {
      const person = new Person();

      person.name = data.name;
      person.age = data.age;
      person.email = data.email;
      person.address = data.address;

      return this.save(person);
    },
  });
