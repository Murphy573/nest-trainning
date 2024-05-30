import { Controller, Get, Param, Req } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Request } from 'express';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get()
  findAll(): string {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.animalService.findOne(id);
  }

  @Get('getAge/:id/:name')
  getAge(
    @Param() params: { id: string; name: string },
    @Req() req: Request,
  ): string {
    return this.animalService.getAge(params.id, params.name);
  }
}
