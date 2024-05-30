import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('create')
  createPerson(@Body() person: PersonDto) {
    return this.personService.createPerson(person);
  }
}
