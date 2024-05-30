import {
  IsEmpty,
  IsIn,
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class PersonDto {
  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty({ message: 'Name 必须传入' })
  name: string;

  @IsIn(['male', 'female'])
  @IsNotEmpty({ message: 'Sex 必须传入' })
  sex: 'male' | 'female';

  @Max(100)
  @Min(1)
  @IsOptional()
  age: number;
}
