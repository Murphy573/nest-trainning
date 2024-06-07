import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('请求到达前经过中间件');
    if (req.headers.host.includes('localhost')) {
      return next();
    }
    return res.status(200).json({
      Response: {
        Error: {
          Code: 'Host Denied',
          Message: "Host中包含 'localhost' 才可以访问",
        },
        RequestId: '123456789',
      },
    });
  }
}
