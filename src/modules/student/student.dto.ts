import { IsNotEmpty } from 'class-validator';
import { PersonDto } from '../person/person.dto';

export class StudentDto extends PersonDto {
  @IsNotEmpty()
  class: number;
}
