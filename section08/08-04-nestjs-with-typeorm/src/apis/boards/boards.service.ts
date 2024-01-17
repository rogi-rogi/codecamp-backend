import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
