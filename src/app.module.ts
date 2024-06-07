import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './modules/animal/animal.module';
import { PersonModule } from './modules/person/person.module';
import { StudentModule } from './modules/student/student.module';
import { GlobalModule } from './modules/common/global.module';
import { APP_PIPE } from '@nestjs/core';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';

@Module({
  imports: [AnimalModule, PersonModule, StudentModule, GlobalModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    // 全局pipe
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          enableDebugMessages: true,
          forbidNonWhitelisted: true,
          whitelist: true,
          transform: true,
          transformOptions: {
            enableImplicitConversion: true,
          },
        });
      },
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
