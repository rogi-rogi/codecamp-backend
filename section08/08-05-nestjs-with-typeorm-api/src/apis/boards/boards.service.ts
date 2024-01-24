import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardServiceCreate } from './interface/boards-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용이에요@@@',
      },
      {
        number: 2,
        writer: '영희',
        title: '영희 제목입니다~~',
        contents: '영희 내용이에요@@@',
      },
      {
        number: 3,
        writer: '훈이',
        title: '훈이 제목입니다~~',
        contents: '훈이 내용이에요@@@',
      },
    ];
    return result;
  }
  create({ createBoardInput }: IBoardServiceCreate): string {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);
    return '게시물 등록 성공';
  }
}
