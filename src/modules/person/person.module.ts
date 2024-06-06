import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { CommonModule } from '../common/Common.module';

@Module({
  imports: [CommonModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
