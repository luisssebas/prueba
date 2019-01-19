import { Injectable } from '@nestjs/common';
import { User } from 'model/user';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }

  getUsers(): User[]{
    return [{name : 'Sebastian', age : 21, email : 'Sebas@hotmail.com'},
    {name : 'Andres', age : 32, email : 'andres@hotmail.com'},
    {name : 'Esteban', age : 25, email : 'esteban@hotmail.com'}];
  }
}
