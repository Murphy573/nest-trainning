import { Injectable, Inject, Optional } from '@nestjs/common';

@Injectable()
export class HttpService {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: any) {}

  @Inject('Test_Token')
  public testToken: string;

  log() {
    console.log('constructor inject', this.testToken);
    console.log('property inject', this.httpClient?.getHttp?.());
  }
}
