import { Injectable } from '@nestjs/common';
import { StudentDto } from './student.dto';
import { HttpService } from '../common/http.service';

@Injectable()
export class StudentService {
  constructor(private httpService: HttpService) {}

  create(createStudentDto: StudentDto) {
    return {
      ...createStudentDto,
      msg: '创建学生成功' + this.httpService.testToken,
    };
  }
}
