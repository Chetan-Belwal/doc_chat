import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EnvironmentModule } from './environment/environment.module';
import { CommandModule } from './cli-commands/command.module';
import { LangchainModule } from './langchain/langchain.module';
import { DocumentManagementModule } from './document-management/document-management.module';
import { FileManagementModule } from './form-data/file-management.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    DatabaseModule,
    EnvironmentModule,
    CommandModule,
    LangchainModule,
    DocumentManagementModule,
    FileManagementModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
