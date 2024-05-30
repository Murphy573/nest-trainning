import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './modules/animal/animal.module';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [AnimalModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
