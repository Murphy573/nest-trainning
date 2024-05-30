import { Injectable } from '@nestjs/common';
import { PersonDto } from './person.dto';

@Injectable()
export class PersonService {
  createPerson(p: PersonDto) {
    return {
      ...p,
      msg: 'create success',
    };
  }
}
