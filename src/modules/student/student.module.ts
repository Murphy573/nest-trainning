import { Module, forwardRef } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CommonModule } from '../common/Common.module';

@Module({
  imports: [CommonModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
