import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Redirect('/dashboard')
  @Get()
  async getHello() {}
}
