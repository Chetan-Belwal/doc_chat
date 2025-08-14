import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LangchainService } from './langchain/langchain.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private langchainService: LangchainService,
  ) {}

  @Get()
  getHello(): string {
    this.langchainService.generateEmbeddings('hello');
    return this.appService.getHello();
  }
}
