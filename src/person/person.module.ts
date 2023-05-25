import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';
import { PersonRepositoryFactory } from './person.repository';
import { getDataSourceToken } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PersonService } from './person.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      include: [PersonModule],
    }),
  ],
  providers: [
    PersonService,
    PersonResolver,
    {
      provide: 'PersonRepository',
      useFactory: PersonRepositoryFactory,
      inject: [getDataSourceToken()],
    },
  ],
})
export class PersonModule {}
