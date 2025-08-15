import { Module } from '@nestjs/common';
import { DocumentEmbeddingRepoService } from './services/document-embedding-repo.service';
import { DashboardController } from './controllers/dashboard.controller';
import { DocumentController } from './controllers/document.controller';
import { DocumentRepoService } from './services/document-repo.service';

@Module({
  providers: [DocumentEmbeddingRepoService, DocumentRepoService],
  exports: [],
  controllers: [DashboardController, DocumentController],
})
export class DocumentManagementModule {}
