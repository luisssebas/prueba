import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from 'model/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('users')
  @Render('index')
  showUsers(){
    const users = this.appService.getUsers();
    return {users};
  }
}
