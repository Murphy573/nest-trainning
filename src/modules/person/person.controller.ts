import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './person.dto';
import { HttpService } from '../common/http.service';

@Controller('person')
export class PersonController {
  constructor(
    private readonly personService: PersonService,
    private readonly httpService: HttpService,
  ) {}

  @Post('create')
  createPerson(@Body() person: PersonDto) {
    this.httpService.log();
    return this.personService.createPerson(person);
  }
}
