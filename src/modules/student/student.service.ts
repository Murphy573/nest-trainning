import { Inject, Injectable } from '@nestjs/common';
import { StudentDto } from './student.dto';
import { HttpService } from '../common/http.service';

@Injectable()
export class StudentService {
  constructor(private httpService: HttpService) {}

  @Inject('HTTP_Global')
  private httpGlobal: any;

  create(createStudentDto: StudentDto) {
    console.log('global module 打印', this.httpGlobal?.getHttp());
    return {
      ...createStudentDto,
      msg: '创建学生成功' + this.httpService.testToken,
    };
  }
}
