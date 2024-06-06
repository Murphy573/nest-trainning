import { Module } from '@nestjs/common';
import { HttpService } from '../common/http.service';

@Module({
  exports: ['HTTP_OPTIONS', 'Test_Token', HttpService],
  providers: [
    {
      provide: 'Test_Token',
      useFactory: () => {
        return 'Test_Token9d09sa0d9sa-';
      },
    },
    {
      provide: 'HTTP_OPTIONS',
      useFactory: () => {
        return {
          getHttp: () => {
            return 'HTTP_OPTIONS';
          },
        };
      },
    },
    HttpService,
  ],
})
export class CommonModule {}
