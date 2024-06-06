import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class GlobalModule {
  static forRoot(options?: Record<string, any>): DynamicModule {
    return {
      global: true,
      module: GlobalModule,
      providers: [
        {
          provide: 'HTTP_Global',
          useFactory: () => {
            return {
              getHttp: () => {
                return 'HTTP_Global';
              },
            };
          },
        },
      ],
      exports: ['HTTP_Global'],
    };
  }
}
