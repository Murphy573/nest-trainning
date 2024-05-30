import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  HttpCode,
  Header,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Request } from 'express';

// host: 限制了发出请求的host必须是localhost
@Controller({ path: 'animal', host: 'localhost' })
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAll(): string {
    return this.animalService.findAll();
  }

  @Get('legs')
  @HttpCode(201)
  @Header('X-NEST-A', 'A')
  getQuery(@Query('type') types: string[]) {
    return Promise.resolve(this.animalService.getQuery(types));
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return this.animalService.findOne(id);
  // }

  @Get('getAge/:id/:name')
  getAge(
    @Param() params: { id: string; name: string },
    @Param('name') name: string,
    @Req() req: Request,
  ): string {
    console.log('name is ', name);
    return this.animalService.getAge(params.id, params.name);
  }
}
