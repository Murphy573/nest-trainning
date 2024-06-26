import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {
  findAll() {
    return 'This action returns all animals';
  }
  findOne(id: string) {
    return `This action returns a #${id} animal`;
  }
  getAge(id: string, name: string) {
    return `This action returns a #${id} animal ${name}`;
  }
  getQuery(types: string[]) {
    return `返回 query 参数：#${types.join('、')}`;
  }
}
